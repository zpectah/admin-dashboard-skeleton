import React from 'react';
import { styled } from '@mui/material';

import { HEADER_HEIGHT } from 'const';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageToggle } from '../LanguageToggle';
import { SidebarToggle } from '../SidebarToggle';
import { ProfileBar } from '../ProfileBar';

const WrapperOuter = styled('div')(() => `
    width: 100%;
    height: auto;
    min-height: ${HEADER_HEIGHT};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`);

const Header = () => {
    return (
        <WrapperOuter>
            <div>
                <SidebarToggle />
            </div>
            <div>
                logo
            </div>
            <div>
                <ThemeToggle />
                <LanguageToggle />
                <ProfileBar />
            </div>
        </WrapperOuter>
    );
};

export default Header;
