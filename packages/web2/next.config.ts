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
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
