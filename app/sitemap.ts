import type { MetadataRoute } from "next";
import { SOLUTIONS } from "@/lib/solutions";

const siteUrl = "https://usechrps.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/features",
    "/solutions",
    "/store",
    "/signup",
    "/about",
    "/contact",
    "/resources",
  ];

  const solutionPaths = SOLUTIONS.map((s) => `/solutions/${s.slug}`);

  return [...staticPaths, ...solutionPaths].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
