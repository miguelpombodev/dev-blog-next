import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [new URL(`${process.env.NEXT_AWS_S3_URL}/**`)],
  },
};

export default nextConfig;
