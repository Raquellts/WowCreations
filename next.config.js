/** @type {import('next').NextConfig} */
module.exports = {
  optimizeFonts: false,

  images: {
    deviceSizes: [320, 640, 768, 1024, 1600], // Tamanhos de dispositivos em pixels
    path: "/_next/image", // Caminho para as imagens otimizadas
    loader: "default",
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Customize webpack config here
    return config;
  },
  experimental: {
    // Enable experimental features
  },
};
