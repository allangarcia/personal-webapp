/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/privacy.html",
        destination: "/privacy",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
