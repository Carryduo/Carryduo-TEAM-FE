/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 31536000,
    domains: ["ddragon.leagueoflegends.com", "raw.githubusercontent.com"],
  },
  reactStrictMode: false,
  swcMinify: true,
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
};

module.exports = nextConfig;
