/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      "ddragon.leagueoflegends.com",
      "raw.githubusercontent.com",
      "erunjrun.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: false,
  swcMinify: true,
};

module.exports = nextConfig;
