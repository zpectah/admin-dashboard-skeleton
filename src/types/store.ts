import React from 'react';

export type toastItemProps = {
    id?: string;
    title: string;
    content?: string;
    context?: 'info' | 'success' | 'error';
    timeout?: number;
    onRemove?: (id: string) => void;
};

export type storeProps = {
    sidebar: boolean,
    language: string,
    theme: 'light' | 'dark',
    toasts: toastItemProps[],
    announcementBanner: React.ReactNode | null,
};
