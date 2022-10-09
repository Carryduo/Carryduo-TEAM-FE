/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: [
      "avatars.githubusercontent.com",
      "ddragon.leagueoflegends.com",
      "raw.githubusercontent.com",
      "erunjrun.com"
    ],
  },
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko'
  }
};

module.exports = nextConfig;