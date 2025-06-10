import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/projects/cappih',
        destination: 'https://cappih.vercel.app',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
