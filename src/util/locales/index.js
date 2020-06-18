import intl from 'react-intl-universal';

require('intl/locale-data/jsonp/en.js');
require('intl/locale-data/jsonp/zh.js');
require('intl/locale-data/jsonp/fr.js');
require('intl/locale-data/jsonp/ja.js');
require('intl/locale-data/jsonp/pt.js');

const locales = {
    "en-US": require('../../../public/locales/en-US.json'),
}

const loadLocales = (currentLocale) => {

    console.log("currentLocale" + currentLocale)

    intl.init({
        currentLocale,
        locales
    }).then(() => {
        return true;
    }).catch(() => {
        return false;
    });
}

export {
    loadLocales
}