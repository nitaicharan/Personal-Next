/** @type {import('next').NextConfig} */
import "./lib/config/env-config.mjs";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
      },
    ],
  },
};

export default nextConfig;
