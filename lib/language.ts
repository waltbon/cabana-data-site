export const getRequestLanguage = (req, i18n) => {
    let lang = null;

    if (req) {
        lang = req['language'];
    }

    if (!lang && i18n) {
        lang = i18n.language;
    }

    if (!lang) {
        lang = 'es';
    }
    
    if (lang && lang.length > 2) {
        lang = lang.substring(0,2);
    }
    
    if(!i18n.language) {
        i18n.changeLanguage(lang);
    }

    return lang;
}