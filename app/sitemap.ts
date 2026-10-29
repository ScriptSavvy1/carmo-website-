import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

const routes = [
  "/",
  "/services",
  ...services.map((service) => service.href),
  "/work",
  "/industries",
  "/about",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [...new Set(routes)].map((href) => ({
    url: new URL(href, site.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: href === "/" ? 1 : href === "/services" || href.startsWith("/services/") ? 0.9 : 0.8,
  }));
}
