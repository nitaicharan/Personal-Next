/** @type {import('next').NextConfig} */
import "./lib/config/env-config.mjs";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'api.realworld.io',
      },
    ],
  },
};

export default nextConfig;
