/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/dar-el-meamar-landing',
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable compression and performance optimizations
  compress: true,
  productionBrowserSourceMaps: false,

  // Headers for better caching and performance
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dar-el-meamar-landing',
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
