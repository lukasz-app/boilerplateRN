/* eslint-disable global-require */

import Localizable from 'react-native-i18n';

Localizable.fallbacks = true;
Localizable.defaultLocale = 'pl';

Localizable.translations = {
  en: require('./languages/en.json'),
  pl: require('./languages/pl.json'),
};

export default Localizable;
