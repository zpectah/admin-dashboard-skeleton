import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    MenuList,
    MenuItem,
    ListItemText,
    ListItemIcon,
    Typography,
    MenuListProps,
} from '@mui/material';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { navItemProps } from 'types';

type NavbarBaseProps = {}
export type NavbarProps = NavbarBaseProps & Partial<MenuListProps>

const navItems: navItemProps[] = [
    {
        key: ROUTES.Dashboard.key,
        href: ROUTES.Dashboard.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Error.key,
        href: '/dfghdfghdf',
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Login.key,
        href: ROUTES.Login.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.LostPassword.key,
        href: ROUTES.LostPassword.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Posts.key,
        href: ROUTES.Posts.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Profile.key,
        href: ROUTES.Profile.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Registration.key,
        href: ROUTES.Registration.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Settings.key,
        href: ROUTES.Settings.match as string,
        icon: <>icon</>,
        badge: null,
    },
    {
        key: ROUTES.Users.key,
        href: ROUTES.Users.match as string,
        icon: <>icon</>,
        badge: <>XYZ</>,
    },
];

const SidebarNav = (props: NavbarProps) => {
    const { ...rest } = props;

    const { t } = useTranslation('views');
    const navigate = useNavigate();
    const { route } = useBreadcrumbs();

    return (
        <MenuList {...rest}>
            {navItems.map(({ key, href, label, icon, badge }) => (
                <MenuItem
                    key={key}
                    onClick={() => navigate(href)}
                    selected={key === route.key}
                >
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText>
                        {t(`${key}.label`)}
                    </ListItemText>
                    {badge && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            {badge}
                        </Typography>
                    )}
                </MenuItem>
            ))}
        </MenuList>
    );
};

export default SidebarNav;
