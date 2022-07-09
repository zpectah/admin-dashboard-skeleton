import React from 'react';
import { styled } from '@mui/material';

import { SIDEBAR_WIDTH, TRANSITION_DEFAULT_DURATION } from 'const';

const WrapperOuter = styled('div')(() => `
    width: 100%;
    height: auto;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`);

export type FooterProps = {
    minimal?: boolean,
    sidebarOpen?: boolean,
}

const Footer = (props: FooterProps) => {
    const {
        // minimal,
        sidebarOpen,
    } = props;

    return (
        <WrapperOuter
            sx={{
                width: sidebarOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%',
                position: 'relative',
                left: sidebarOpen ? SIDEBAR_WIDTH : 0,
                transition: `width ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s, left ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s`,
            }}
        >
            footer
        </WrapperOuter>
    );
};

export default Footer;
