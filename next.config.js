/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  generateMetadata: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
