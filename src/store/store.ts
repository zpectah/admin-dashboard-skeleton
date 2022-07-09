import { LANGUAGE, THEME } from '../config';
import {
    APP_LANGUAGE_KEY,
    APP_THEME_KEY,
    APP_SIDEBAR_KEY,
} from 'const'
import { storeProps } from 'types';

const store: storeProps = {
    sidebar: localStorage.getItem(APP_SIDEBAR_KEY) === 'true',
    language: localStorage.getItem(APP_LANGUAGE_KEY) || LANGUAGE.default,
    theme: ((localStorage.getItem(APP_THEME_KEY) === 'light' || localStorage.getItem(APP_THEME_KEY) === 'dark') && localStorage.getItem(APP_THEME_KEY) as 'light' | 'dark') || THEME.default,
    toasts: [],
    announcementBanner: `Some announcement example banner text`,
};

export default store;
