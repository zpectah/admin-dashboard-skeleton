import React, {useMemo} from 'react';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';

import { PROJECT_META } from 'config';
import { useBreadcrumbs } from 'hooks';

const Breadcrumbs = () => {
    const { t } = useTranslation([ 'views', 'settings' ]);
    const { route, isDetail, id, settingsTab } = useBreadcrumbs();

    const detail = useMemo(() => {
        if (isDetail && id) return (
            <Typography
                variant="caption"
            >
                #{id}
            </Typography>
        );
    }, [ isDetail, id ]);
    const settingsPanel = useMemo(() => {
        if (settingsTab) return (
            <Typography
                key={settingsTab.key}
                variant="caption"
            >
                {t(`settings:${settingsTab.key}.label`)}
            </Typography>
        );
    }, [ settingsTab, t ]);

    return (
        <MuiBreadcrumbs>
            <Typography
                variant="caption"
            >
                {PROJECT_META.meta.title}
            </Typography>
            {route && (
                <Typography
                    variant="caption"
                >
                    {t(`views:${route.key}.label`)}
                </Typography>
            )}
            {detail}
            {settingsPanel}
        </MuiBreadcrumbs>
    );
};

export default Breadcrumbs;
