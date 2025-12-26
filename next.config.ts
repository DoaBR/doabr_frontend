import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Descomente a linha abaixo se o repo não for doabr.github.io
  // basePath: '/doabr_frontend',
};

export default nextConfig;
