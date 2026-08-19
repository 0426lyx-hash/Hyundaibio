import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
