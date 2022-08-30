/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
      "opgg-static.akamaized.net",
    ],
  },
};

module.exports = nextConfig;
