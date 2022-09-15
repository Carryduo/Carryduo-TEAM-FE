/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "ddragon.leagueoflegends.com",
      "raw.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
