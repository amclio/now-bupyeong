module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
