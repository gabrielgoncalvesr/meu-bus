import intl from 'react-intl-universal';

const locales = {
    "en-US": require('./en-US.json'),
    "fr-FR": require('./fr-FR.json'),
    "pt-BR": require('./pt-BR.json'),
}

const loadLocales = async (currentLocale) => {
    await intl.init({
        locales, currentLocale,
    }).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}

const getTranslation = (object) => {
    return intl.get(object);
}

export {
    loadLocales,
    getTranslation,
}