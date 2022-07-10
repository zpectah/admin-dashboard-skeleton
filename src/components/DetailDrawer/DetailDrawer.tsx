import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Drawer,
    Typography,
    DrawerProps,
} from '@mui/material';

import {
    CloseButton,
    Scrollable,
} from '../ui';
import {
    DrawerContainer,
    DrawerHeader,
    DrawerContent,
} from './elements';

type DetailDrawerBaseProps = {
    children?: React.ReactNode,
    open?: boolean,
    onClose?: () => void,
    rootList?: string,
    drawerProps?: Partial<DrawerProps>,
    title?: string,
};
export type DetailDrawerProps = DetailDrawerBaseProps;

const DetailDrawer: React.FC<DetailDrawerProps> = (props) => {
    const {
        children,
        open,
        onClose,
        rootList,
        drawerProps,
        title,
    } = props;

    const navigate = useNavigate();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => {
                if(rootList) navigate(rootList);
                if(onClose) onClose();
            }}
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
