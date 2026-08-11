/**
 * Carmo Technology — brand film renderer.
 *
 * Pipeline:  scene.html  →  (Edge, frame-by-frame)  →  PNG frames  →  MP4
 *
 * Determinism is the whole trick. Rather than screen-recording in real time,
 * every animation is paused and its `currentTime` is set explicitly per frame,
 * so frame N is always identical no matter how slow the machine is.
 *
 * Usage:  node render.js [--vertical] [--fps 30] [--keep-frames]
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execFileSync, spawnSync } = require("child_process");

const PW = "C:/Users/hp/AppData/Local/npm-cache/_npx/db89d7302a373f10/node_modules/playwright-core";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const FFMPEG = require(path.join(os.homedir(), "node_modules/@ffmpeg-installer/ffmpeg")).path;

const { chromium } = require(PW);

const HERE = __dirname;
const PROJECT = path.resolve(HERE, "../..");
const NEXT_MEDIA = path.join(PROJECT, ".next/static/media");

const argv = process.argv.slice(2);
const VERTICAL = argv.includes("--vertical");
const KEEP = argv.includes("--keep-frames");
const FPS = Number(argv[argv.indexOf("--fps") + 1]) || 30;
const DURATION = 34.0; // seconds — must match the timeline in scene.html

// The exact Poppins/Inter subsets next/font already downloaded for the site,
// so the film uses the same typefaces as the website rather than a lookalike.
const FONTS = [
  { file: "0484562807a97172-s.p.woff2", family: "Poppins", weight: 600 },
  { file: "b957ea75a84b6ea7-s.p.woff2", family: "Poppins", weight: 700 },
  { file: "8888a3826f4a3af4-s.p.woff2", family: "Poppins", weight: 500 },
  { file: "e4af272ccee01ff0-s.p.woff2", family: "Inter", weight: "100 900" },
];

function buildFontCss() {
  const faces = FONTS.map(({ file, family, weight }) => {
    const p = path.join(NEXT_MEDIA, file);
    if (!fs.existsSync(p)) {
      throw new Error(
        `Missing font ${file}. Run \`npx next build\` in the project first — ` +
          `the film reuses the fonts next/font downloads into .next/static/media.`,
      );
    }
    const b64 = fs.readFileSync(p).toString("base64");
    return `@font-face{font-family:'${family}';font-style:normal;font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
  });
  return `<style>\n${faces.join("\n")}\n</style>`;
}

async function main() {
  const width = VERTICAL ? 1080 : 1920;
  const height = VERTICAL ? 1920 : 1080;
  const label = VERTICAL ? "vertical" : "landscape";
  const totalFrames = Math.round(DURATION * FPS);

  // Self-contained HTML: fonts inlined so the render needs no network at all.
  const template = fs.readFileSync(path.join(HERE, "scene.html"), "utf8");
  const html = template.replace("<!--FONTS-->", buildFontCss());
  const builtPath = path.join(HERE, `.scene.${label}.html`);
  fs.writeFileSync(builtPath, html);

  const framesDir = path.join(HERE, `.frames-${label}`);
  fs.rmSync(framesDir, { recursive: true, force: true });
  fs.mkdirSync(framesDir, { recursive: true });

  console.log(`[${label}] ${width}x${height} · ${FPS}fps · ${DURATION}s · ${totalFrames} frames`);

  const browser = await chromium.launch({
    executablePath: EDGE,
    args: ["--force-color-profile=srgb", "--disable-lcd-text", "--hide-scrollbars"],
  });
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => console.log("[page error]", e.message));

  await page.goto("file:///" + builtPath.replace(/\\/g, "/"), { waitUntil: "load" });
  if (VERTICAL) await page.addStyleTag({ path: path.join(HERE, "vertical.css") });

  // Fonts must be fully ready before the first frame, or early frames render
  // in a fallback face and the type visibly "snaps" on playback.
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(400);

  // Freeze the whole timeline.
  await page.evaluate(() => {
    document.getAnimations().forEach((a) => a.pause());
  });

  const started = Date.now();
  for (let i = 0; i < totalFrames; i++) {
    const tMs = (i / FPS) * 1000;
    await page.evaluate((t) => {
      for (const a of document.getAnimations()) a.currentTime = t;
    }, tMs);

    // JPEG rather than PNG: at 1080p a PNG frame costs ~1.7 MB and dominates
    // render time. q=95 is visually lossless here and the frames are only an
    // intermediate — H.264 re-compresses them anyway.
    // NB: no `animations: "disabled"` — that option fast-forwards finite
    // animations to completion and would override the timeline we just set.
    await page.screenshot({
      path: path.join(framesDir, String(i).padStart(5, "0") + ".jpg"),
      type: "jpeg",
      quality: 95,
    });

    if (i % 60 === 0 || i === totalFrames - 1) {
      const pct = (((i + 1) / totalFrames) * 100).toFixed(0);
      const secs = ((Date.now() - started) / 1000).toFixed(0);
      console.log(`  frame ${i + 1}/${totalFrames} (${pct}%) · ${secs}s elapsed`);
    }
  }

  await browser.close();

  // ---- encode ----
  const outDir = path.join(PROJECT, "marketing");
  fs.mkdirSync(outDir, { recursive: true });
  const mp4 = path.join(outDir, `carmo-technology-${label}.mp4`);

  console.log(`[${label}] encoding ${mp4}`);
  execFileSync(
    FFMPEG,
    [
      "-y",
      "-framerate", String(FPS),
      "-i", path.join(framesDir, "%05d.jpg"),
      "-c:v", "libx264",
      "-preset", "slow",
      "-crf", "17",
      "-pix_fmt", "yuv420p",       // required for QuickTime / WhatsApp / most players
      "-movflags", "+faststart",   // metadata up front so it streams immediately
      "-r", String(FPS),
      mp4,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  // Poster frame — grab a moment where the tagline is fully on screen.
  const poster = path.join(outDir, `carmo-technology-${label}-poster.jpg`);
  const posterFrame = String(Math.round(7.0 * FPS)).padStart(5, "0") + ".jpg";
  execFileSync(
    FFMPEG,
    ["-y", "-i", path.join(framesDir, posterFrame), "-q:v", "2", poster],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  if (!KEEP) fs.rmSync(framesDir, { recursive: true, force: true });
  fs.rmSync(builtPath, { force: true });

  const probe = spawnSync(
    FFMPEG.replace(/ffmpeg\.exe$/, "ffmpeg.exe"),
    ["-hide_banner", "-i", mp4],
    { encoding: "utf8" },
  );
  const info = (probe.stderr || "").split("\n").filter((l) => /Duration|Stream #/.test(l));
  console.log(`[${label}] done → ${mp4}`);
  console.log(info.map((l) => "   " + l.trim()).join("\n"));
  console.log(`   size: ${(fs.statSync(mp4).size / 1e6).toFixed(2)} MB`);
  console.log(`   poster → ${poster}`);
}

main().catch((e) => {
  console.error("RENDER FAILED:", e.message);
  process.exit(1);
});
