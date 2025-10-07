import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: [
      "unsplash.com",
      "plus.unsplash.com"
    ],
  },
  /* config options here */
  output: "standalone",
};

export default nextConfig;
