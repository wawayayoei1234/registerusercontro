/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = nextConfig

module.exports = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'standalone',
}