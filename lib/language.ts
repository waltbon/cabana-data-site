export const getRequestLanguage = (req, i18n) => {
    let lang = req && req['language'] ? req['language'] : i18n.language ? i18n.language : 'es';
    if (lang.length > 2) {
        lang = lang.substring(0,2);
    }
    return lang;
}