/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    entry: './server.ts',
  },
}

module.exports =  nextConfig
