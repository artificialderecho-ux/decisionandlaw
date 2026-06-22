import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  compress: true,
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: '/tools/westlaw-ai-assist', destination: '/tools', permanent: true },
      { source: '/tools/clio-manage', destination: '/tools', permanent: true },
      { source: '/tools/relativity-ai', destination: '/tools/relativity', permanent: true },
      { source: '/tools/casetext', destination: '/tools/casetext-cocounsel', permanent: true },
      { source: '/tools/klarity', destination: '/tools', permanent: true },
      { source: '/tools/luminance', destination: '/tools', permanent: true },
      { source: '/tools/practice-platform', destination: '/tools', permanent: true },
    ];
  },
};

export default withContentlayer(nextConfig);
