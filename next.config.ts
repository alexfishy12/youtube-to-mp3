import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/convert',
        destination: 'http://localhost:4000/convert',
      },
    ];
  },
};

export default nextConfig;
