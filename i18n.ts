import NextI18Next from 'next-i18next';
import path from 'path';
const { localeSubpaths } = require("./next.config").publicRuntimeConfig;
const localePath = path.resolve('./public/static/locales');

const localeSubpathVariations = {
  none: {},
  foreign: {
    en: "en",
  },
  all: {
    en: "en",
    es: "es",
  },
};


const i18n = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['es'],
  localeSubpaths: localeSubpathVariations[localeSubpaths],
  localePath,
  browserLanguageDetection: true,
  defaultNS: 'common'
})

export default i18n;