import NextI18Next from 'next-i18next';
import path from 'path';

export default new NextI18Next({
  defaultLanguage: 'es',
  otherLanguages: ['en'],
  browserLanguageDetection: true,
  shallowRender: false,
  // localePath: path.resolve('./public/static/locales'),
  localeSubpaths: {
    es: 'es',
    en: 'en',
  }
});