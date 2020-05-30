import NextI18Next from 'next-i18next';

export default new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  browserLanguageDetection: true,
  shallowRender: false,
  localeSubpaths: {
    // es: 'es',
    en: 'en',
  }
});