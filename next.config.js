/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    domains: ["ddragon.leagueoflegends.com", "raw.githubusercontent.com","erunjrun.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
