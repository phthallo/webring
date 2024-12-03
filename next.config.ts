import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    INTERNAL_URL: process.env.NEXT_PUBLIC_INTERNAL_URL,
  },
};

export default nextConfig;
