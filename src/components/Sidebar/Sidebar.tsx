import React from 'react';
import { styled, Box, Drawer } from '@mui/material';

import { HEADER_HEIGHT, SIDEBAR_WIDTH } from 'const';
import { useSidebarToggle } from 'hooks';
import { Scrollable } from '../ui';
import SidebarNav from './SidebarNav';

const DrawerContainer = styled(Box)(() => `
    width: 100%;
    height: 100%;
    position: relative;
`);

const Sidebar = () => {
    const { isOpen, toggle } = useSidebarToggle();

    return (
        <Drawer
            open={isOpen}
            onClose={() => toggle()}
            anchor="left"
            variant="persistent"
            sx={{
                border: 'none',
                [`& .MuiDrawer-paper`]: {
                    width: SIDEBAR_WIDTH,
                    height: `calc(100vh - ${HEADER_HEIGHT})`,
                    top: HEADER_HEIGHT,
                    boxSizing: 'border-box',
                    border: 'none',
                },
            }}
            hideBackdrop
        >
            <DrawerContainer>
                <Scrollable>
                    <SidebarNav />
                </Scrollable>
            </DrawerContainer>
        </Drawer>
    );
};

export default Sidebar;
