import React from 'react';

import { toastItemProps } from './common';
import { UsersItemProps, PostsItemProps } from './model';

export type storeProps = {
    sidebar: boolean,
    language: string,
    theme: 'light' | 'dark',
    toasts: toastItemProps[],
    announcementBanner: React.ReactNode | null,
    Users: UsersItemProps[],
    Posts: PostsItemProps[],
};
