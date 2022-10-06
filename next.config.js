/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST: process.env.HOST,
    TOKEN: process.env.TOKEN
  }
}

module.exports = nextConfig
