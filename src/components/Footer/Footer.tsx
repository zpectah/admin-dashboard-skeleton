import React from 'react';
import { useTranslation } from 'react-i18next';
import { styled, Typography } from '@mui/material';

import { PROJECT_META } from 'config';
import {
    SIDEBAR_WIDTH,
    TRANSITION_DEFAULT_DURATION,
} from 'const';

const WrapperOuter = styled('div')(() => `
    width: 100%;
    height: auto;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`);

export type FooterProps = {
    sidebarOpen?: boolean,
}

const Footer = (props: FooterProps) => {
    const { sidebarOpen } = props;

    const { t } = useTranslation('common');

    return (
        <WrapperOuter
            sx={{
                width: sidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%',
                position: 'relative',
                left: sidebarOpen ? SIDEBAR_WIDTH : 0,
                transition: `width ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s, left ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s`,
            }}
        >
            <Typography
                variant="caption"
            >
                &copy; {PROJECT_META.copyright} {t('footer.copyright', { company: PROJECT_META.name })} | {t('footer.allRights')}
            </Typography>
        </WrapperOuter>
    );
};

export default Footer;
