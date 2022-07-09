import { routeItemProps, tabItemProps, themesProps } from './types';

export const PROJECT_META = {
    name: 'COMPANY NAME',
    author: 'Tomas Sychra | zpecter.com',
    copyright: 2022,
    meta: {
        title: 'SKELETON DASHBOARD',
        description: 'Skeleton demo description ...'
    },
};
export const LANGUAGE = {
    default: 'en-US',
    list: [ 'en-US', 'cs-CZ' ],
};
export const THEME: { default: themesProps, list: themesProps[] } = {
    default: 'light',
    list: [ 'light', 'dark' ],
}
export const ROUTE_DEFAULT = 'Dashboard';
export const ROUTES: { [k: string]: routeItemProps } = {
    Error: {
        match: null,
        key: 'error',
        meta: {
            title: 'error.meta.title'
        },
    },
    Dashboard: {
        match: '/',
        key: 'dashboard',
    },
    Login: {
        match: '/login',
        key: 'login',
        meta: {
            title: 'login.meta.title'
        },
    },
    LostPassword: {
        match: '/lost-password',
        key: 'lostPassword',
        meta: {
            title: 'lostPassword.meta.title'
        },
    },
    Posts: {
        match: '/posts',
        key: 'posts',
        meta: {
            title: 'posts.meta.title'
        },
    },
    Profile: {
        match: '/profile',
        key: 'profile',
        meta: {
            title: 'profile.meta.title'
        },
    },
    Registration: {
        match: '/registration',
        key: 'registration',
        meta: {
            title: 'registration.meta.title'
        },
    },
    Settings: {
        match: '/settings',
        key: 'settings',
        meta: {
            title: 'settings.meta.title'
        },
    },
    Users: {
        match: '/users',
        key: 'users',
        meta: {
            title: 'users.meta.title'
        },
    },
};
export const SETTINGS_TABS: tabItemProps[] = [
    {
        key: 'general',
        match: '/settings',
    },
    {
        key: 'content',
        match: '/settings/content',
    },
    {
        key: 'language',
        match: '/settings/language',
    },
];
