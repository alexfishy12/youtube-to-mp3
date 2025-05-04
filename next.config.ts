import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/convert',
        destination: process.env.NEXT_PUBLIC_API_BASE_URL + ':' + process.env.MEDIA_SERVER_PORT + '/convert',
      },
    ];
  },
};

export default nextConfig;
