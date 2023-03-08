/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.dummyjson.com", "image.tmdb.org"],
  },
}

module.exports = nextConfig
