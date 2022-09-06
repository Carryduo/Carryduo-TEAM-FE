/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
