import React, { useState } from 'react';
import { styled, Box, Drawer } from '@mui/material';

import { PROFILEBAR_WIDTH } from 'const';
import { useProfile } from 'hooks';
import { Scrollable, ConfirmDialog } from '../ui';

const DrawerContainer = styled(Box)(() => `
    width: 100%;
    height: 100%;
    position: relative;
`);

const ProfileBar = () => {
    const [ open, setOpen ] = useState(false);
    const { entity, logOut } = useProfile();
    const [ confirmOpen, setConfirmOpen ] = useState(false);

    const closeConfirmHandler = () => setConfirmOpen(false);
    const confirmLogoutHandler = () => logOut();

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
            >
                {entity.email}
            </button>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                sx={{
                    border: 'none',
                    [`& .MuiDrawer-paper`]: {
                        width: PROFILEBAR_WIDTH,
                        boxSizing: 'border-box',
                        border: 'none',
                    },
                }}
            >
                <DrawerContainer>
                    <Scrollable>
                        {entity.name_first} {entity.name_last}
                        <br />
                        {entity.email}
                        <br />
                        <button
                            onClick={() => setConfirmOpen(true)}
                        >
                            log out
                        </button>
                    </Scrollable>
                </DrawerContainer>
            </Drawer>
            <ConfirmDialog
                open={confirmOpen}
                onClose={closeConfirmHandler}
                onConfirm={confirmLogoutHandler}
                title="Log out"
                content="Are you sure, you want to log out?"
            />
        </>
    );
};

export default ProfileBar;
