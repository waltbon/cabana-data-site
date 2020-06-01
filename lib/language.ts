export const getRequestLanguage = (req, i18n) => {
    console.log("req.language", req ? req['language'] : '--')
    console.log("i18n.language", i18n.language);
    let lang = null;

    if (req) {
        lang = req['language'] ? req['language'] : i18n.language;
    }

    if (!i18n.language) {
        i18n.changeLanguage(lang)
    }

    if (lang && lang.length > 2) {
        lang = lang.substring(0,2);
    }
    return lang;
}