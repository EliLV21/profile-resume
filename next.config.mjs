/** @type {import('next').NextConfig} */

import withSvgr from 'next-svgr';

const nextConfig = {
  output: 'export',
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
