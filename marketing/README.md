# Carmo Technology — brand film

A 34-second marketing video, generated from code so it can be re-rendered any
time the copy, contacts or branding change.

## Files

| File | What it is |
| --- | --- |
| `carmo-technology-landscape.mp4` | 1920×1080 · 30fps — website, YouTube, LinkedIn, presentations |
| `carmo-technology-vertical.mp4` | 1080×1920 · 30fps — WhatsApp Status, Instagram/Facebook Stories, TikTok |
| `carmo-technology-*-poster.jpg` | Poster/thumbnail frame for each cut |
| `video/scene.html` | The film itself — all copy, layout and animation |
| `video/vertical.css` | 9:16 layout overrides (same timeline, phone-shaped) |
| `video/render.js` | Renderer: HTML → PNG frames → MP4 |

## Storyboard

| Time | Scene |
| --- | --- |
| 0.0 – 4.6s | Logo build — the copper ring draws in, wordmark assembles, "Mogadishu · Somalia" |
| 4.6 – 8.6s | Tagline — "Smart technology, real results." |
| 8.6 – 12.6s | Positioning — "Rooted in Mogadishu. Built to global standards." |
| 12.6 – 19.6s | The four capabilities |
| 19.6 – 25.6s | Proof — SmartKGMS, NHPC, Laundry Management System |
| 25.6 – 29.2s | Sectors |
| 29.2 – 34.0s | Call to action — **carmotechnology1@gmail.com** and **+254 729 292 631** |

Every claim in the film is taken from `lib/site.ts`, so the video says only what
the website says.

## Re-rendering

```bash
npx next build                 # once — supplies the Poppins/Inter font files
cd marketing/video
node render.js                 # landscape
node render.js --vertical      # 9:16
```

Options: `--fps 60`, `--keep-frames` (leaves the PNG sequence on disk for
editing in a video tool).

Requirements — both already present on this machine, neither is a system install:
- Microsoft Edge (used as the renderer)
- `@ffmpeg-installer/ffmpeg` (npm package, provides the encoder binary)

### How it works

The film is ordinary HTML/CSS. Rather than screen-recording it in real time,
`render.js` pauses every animation and sets `currentTime` explicitly for each
frame, then screenshots. That makes the output deterministic — frame N is
identical on every machine, at any speed, with no dropped frames.

Two things to keep in mind when editing:

- **`scene.html` and `render.js` share a duration.** `DURATION` in `render.js`
  must match the end of the timeline in `scene.html` (currently 34.0s).
- **Don't add `animations: "disabled"` to the screenshot call.** It fast-forwards
  finite animations to completion and overrides the timeline.

## Editing the copy

All text lives in `video/scene.html`, in plain markup — no build step. The
contact details appear in the `#s7` section. Change them, re-run `render.js`,
and both cuts pick the change up.

## Notes / not included

- **No audio.** The film is silent by design — it's built to be scored with a
  licensed music track in any editor, and most social feeds autoplay muted
  anyway. Ask if you want a version with a soundtrack laid in.
- **No website URL on screen.** `site.url` is still the placeholder
  `www.carmotechnology.com` and the launch checklist has it as unconfirmed, so
  the film deliberately drives to email and WhatsApp only. Once the domain is
  live it should be added to the end card.
- **Subtitles.** Not needed while the film is text-only, but if a voiceover is
  added later it should ship with captions.
