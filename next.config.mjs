import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [{ hostname: 'images.pexels.com' }],
  },
};

export default nextConfig;
