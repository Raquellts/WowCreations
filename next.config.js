/** @type {import('next').NextConfig} */
module.exports = {
  optimizeFonts: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Customize webpack config here
    return config;
  },
  experimental: {
    // Enable experimental features
  },
};
