
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Enable production mode for better performance
  reactStrictMode: true,
  // Configure for Lovable compatibility
  swcMinify: true,
};

export default nextConfig;
