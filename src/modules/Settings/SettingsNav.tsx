import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tabs, Tab } from '@mui/material';

import { SETTINGS_TABS } from 'config';
import { useBreadcrumbs } from 'hooks';

const SettingsNav = () => {
    const [ tab, setTab ] = useState('general');

    const { t } = useTranslation('settings');
    const navigate = useNavigate();
    const { settingsTab } = useBreadcrumbs();

    useEffect(() => {
        if (settingsTab) setTab(settingsTab.key);
    }, [ settingsTab ]);

    return (
        <Tabs
            value={tab}
        >
            {SETTINGS_TABS.map(({ key, match }) => (
                <Tab
                    key={key}
                    value={key}
                    label={t(`${key}.label`)}
                    onClick={() => navigate(match)}
                />
            ))}
        </Tabs>
    );
};

export default SettingsNav;

