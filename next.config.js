const withPWA = require('next-pwa')

module.exports = {
  reactStrictMode: true,

  i18n: {
    locales: ['ko', 'en', 'ja'],
    defaultLocale: 'ko',
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    withPWA({
      pwa: {
        dest: 'public',
      },
    }).webpack(config, options)

    return config
  },
}
