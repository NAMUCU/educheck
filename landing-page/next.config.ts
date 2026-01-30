import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages
  output: 'export',

  // Required for static export - disables Image Optimization API
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages subdirectory deployment
  basePath: '/educheck-landing',

  // Adds trailing slash to URLs (e.g., /about/ instead of /about)
  trailingSlash: true,
};

export default nextConfig;
