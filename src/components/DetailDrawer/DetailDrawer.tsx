import React from 'react';
import {
    styled,
    Box,
    Drawer,
    Typography,
    DrawerProps,
} from '@mui/material';

import {
    CloseButton,
    Scrollable,
} from '../ui';

const DrawerContainer = styled(Box)(({ theme }) => `
    height: 100%;
    position: relative;
    
    ${theme.breakpoints.down('md')} {
        width: 100vw;
    }
    ${theme.breakpoints.up('md')} {
        width: ${theme.breakpoints.values.md}px;
    }    
`);
const DrawerHeader = styled(Box)(({ theme }) => `
    width: 100%;
    min-height: 75px;
    padding: ${theme.spacing(2.5)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`);
const DrawerContent = styled(Box)(({ theme }) => `
    padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
`);

type DetailDrawerBaseProps = {
    children?: React.ReactNode,
    open?: boolean,
    onClose?: () => void,
    drawerProps?: Partial<DrawerProps>,
    title?: string,
};
export type DetailDrawerProps = DetailDrawerBaseProps;

const DetailDrawer: React.FC<DetailDrawerProps> = (props) => {
    const {
        children,
        open,
        onClose,
        drawerProps,
        title,
    } = props;

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose && onClose}
            {...drawerProps}
        >
            <DrawerHeader>
                <Typography
                    variant="h4"
                >
                    {title}
                </Typography>
                <CloseButton
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                    }}
                />
            </DrawerHeader>
            <DrawerContainer>
                <Scrollable>
                    <DrawerContent>
                        {children}
                    </DrawerContent>
                </Scrollable>
            </DrawerContainer>
        </Drawer>
    );
};

export default DetailDrawer;
