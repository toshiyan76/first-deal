/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  generateMetadata: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
