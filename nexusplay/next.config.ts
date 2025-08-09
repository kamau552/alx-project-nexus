import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ⬅️ This skips ESLint errors on Vercel
  },
};

export default nextConfig;
