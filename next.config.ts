import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@/components']
  }
};

export default nextConfig;
