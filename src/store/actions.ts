import React from 'react';

import { themesProps, toastItemProps } from 'types';
import {
    LANGUAGE_TOGGLE,
    SIDEBAR_TOGGLE,
    THEME_TOGGLE,
    TOAST_ADD,
    TOAST_REMOVE,
    ANNOUNCEMENT_BANNER_ADD,
    ANNOUNCEMENT_BANNER_REMOVE,
} from './const';

export function languageToggle(payload: string) {
    return { type: LANGUAGE_TOGGLE, payload };
}

export function sidebarToggle(payload: boolean) {
    return { type: SIDEBAR_TOGGLE, payload };
}

export function themeToggle(payload: themesProps) {
    return { type: THEME_TOGGLE, payload };
}

export function addToast(payload: Partial<toastItemProps>) {
    return { type: TOAST_ADD, payload };
}

export function removeToast(payload: { id: string }) {
    return { type: TOAST_REMOVE, payload };
}

export function addAnnouncement(payload: React.ReactNode) {
    return { type: ANNOUNCEMENT_BANNER_ADD, payload };
}

export function removeAnnouncement() {
    return { type: ANNOUNCEMENT_BANNER_REMOVE };
}
