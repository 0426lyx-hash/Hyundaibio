import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.example.com",
      },
      {
        protocol: "https",
        hostname: "pub-8c4bce25bb3f4de4a3bf5925c0af5425.r2.dev",
      },
    ],
  },
};

export default nextConfig;
