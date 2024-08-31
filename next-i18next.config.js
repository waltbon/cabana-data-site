var path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localePath: path.resolve('./public/locales'),
  },
  react: { useSuspense: false },//this line
}