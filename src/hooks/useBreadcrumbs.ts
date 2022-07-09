import { useLocation, useParams } from 'react-router-dom';
import { useTranslation, TFunction } from 'react-i18next';

import {
    PROJECT_META,
    ROUTES,
    ROUTE_DEFAULT,
    SETTINGS_TABS,
} from 'config';
import { DETAIL_PATH_KEY } from 'const';
import { routeItemProps, tabItemProps } from 'types';

const getRoute = (pathname: string) => {
    const keys = Object.keys(ROUTES);
    let route = ROUTES.Error;
    keys.forEach((key) => {
        const r = ROUTES[key];
        const match = r.match;
        if (pathname === '/') {
            route = ROUTES[ROUTE_DEFAULT];
        } else if (match && pathname.includes(match)) {
            route = r;
        }
    });

    return route;
};
const getMeta = (route: routeItemProps, t: TFunction) => {
    const tPrefix = 'views:';
    let title = PROJECT_META.meta.title;
    let description = PROJECT_META.meta.description;
    if (route.meta) {
        if (route.meta.title) title = `${t(`${tPrefix}${route.meta.title}`)} | ${title}`;
        if (route.meta.description) description = route.meta.description;
    }

    return { title, description };
};
const getParsedPath = (pathName: string) => {
    let array = pathName.split('/');
    array.shift();

    return array;
};
const getSettingsTab = (route: routeItemProps, pathName: string) => {
    let tab = null;
    if (route.key === ROUTES.Settings.key) {
        // eslint-disable-next-line array-callback-return
        SETTINGS_TABS.map((item) => {
            if (pathName.includes(item.match)) tab = item;
        });
    }

    return tab as tabItemProps | null;
};

const useBreadcrumbs = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const params = useParams();
    const pathName = location.pathname;
    const route = getRoute(pathName);
    const meta = getMeta(route, t);
    const parsedPath = getParsedPath(pathName);
    const settingsTab = getSettingsTab(route, pathName);
    const isDetail = parsedPath.includes(DETAIL_PATH_KEY);
    const id = Number(params?.id) || isDetail ? Number(parsedPath[parsedPath.length - 1]) : null;

    return {
        meta,
        route,
        location,
        params,
        id,
        isDetail,
        pathName,
        parsedPath,
        settingsTab,
    };
};

export default useBreadcrumbs;
