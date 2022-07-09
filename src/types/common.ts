import React from "react";

export type themesProps = 'light' | 'dark';

export type routeItemProps = {
    match: string | null,
    key: string,
    meta?: {
        title?: string,
        description?: string,
    },
    options?: any,
};

export type tabItemProps = {
    key: string,
    match: string,
};

export type navItemProps = {
    key: string,
    href: string,
    label?: string,
    icon?: React.ReactNode,
    badge?: React.ReactNode,
};
