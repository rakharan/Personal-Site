/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
}

module.exports = nextConfig
