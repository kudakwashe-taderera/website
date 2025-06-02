import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Enable ESLint during production builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Enable TypeScript checks during production builds
    ignoreBuildErrors: false,
  },
  images: {
    // Enable Next.js image optimization
    unoptimized: false,
    domains: ['kudakwashe-taderera.vercel.app'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
          chunkFilename: 'static/css/[id].[contenthash].css',
        })
      );
    }
    return config;
  },
  // Enable source maps in production for better error tracking
  productionBrowserSourceMaps: true,
  // Enable React strict mode for better development practices
  reactStrictMode: true,
  // Compress responses
  compress: true,
}

export default nextConfig
