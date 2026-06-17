import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const distDir = process.env.NEXT_DIST_DIR || ".next";

const nextConfig: NextConfig = {
  distDir,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/tiawanbuyway" : "",
  assetPrefix: isGitHubPages ? "/tiawanbuyway/" : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/tiawanbuyway" : "",
    NEXT_PUBLIC_SITE_ORIGIN: isGitHubPages ? "https://bgo17888.github.io/tiawanbuyway" : "https://taiwanbuyway.tw",
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
