/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hemi.rc.anewgo.com',
      },
    ],
  },
}

module.exports = nextConfig
