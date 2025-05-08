import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://mp-general-bucket.s3.sa-east-1.amazonaws.com/**"),
    ],
  },
};

export default nextConfig;
