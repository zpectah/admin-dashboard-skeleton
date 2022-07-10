import {
    APP_LANGUAGE_KEY,
    APP_THEME_KEY,
    APP_SIDEBAR_KEY,
} from 'const';
import appStore from './store';
import {
    LANGUAGE_TOGGLE,
    SIDEBAR_TOGGLE,
    THEME_TOGGLE,
    TOAST_ADD,
    TOAST_REMOVE,
    ANNOUNCEMENT_BANNER_ADD,
    ANNOUNCEMENT_BANNER_REMOVE,
    LOAD_USERS,
    LOAD_POSTS,
} from './const';

function Reducer (state = appStore, action: any) {
    let toast;

    switch (action.type) {

        case LANGUAGE_TOGGLE:
            localStorage.setItem(APP_LANGUAGE_KEY, action.payload);
            return Object.assign({}, state, {
                language: action.payload,
            });

        case THEME_TOGGLE:
            localStorage.setItem(APP_THEME_KEY, action.payload);
            return Object.assign({}, state, {
                theme: action.payload,
            });

        case SIDEBAR_TOGGLE:
            localStorage.setItem(APP_SIDEBAR_KEY, action.payload);
            return Object.assign({}, state, {
                sidebar: action.payload,
            });

        case TOAST_ADD:
            toast = {
                id: Math.random().toString(36).substring(2),
                ...action.payload,
            };
            return Object.assign({}, state, {
                toasts: [toast, ...state.toasts],
            });

        case TOAST_REMOVE:
            return Object.assign({}, state, {
                toasts: state.toasts.filter((item) => {
                    return item.id !== action.payload.id;
                }),
            });

        case ANNOUNCEMENT_BANNER_ADD:
            return Object.assign({}, state, {
                announcementBanner: action.payload,
            });

        case ANNOUNCEMENT_BANNER_REMOVE:
            return Object.assign({}, state, {
                announcementBanner: null,
            });

        case LOAD_USERS:
            return Object.assign({}, state, {
                Users: action.payload,
            });

        case LOAD_POSTS:
            return Object.assign({}, state, {
                Posts: action.payload,
            });

        default:
            return state;

    }



}

export default Reducer;
