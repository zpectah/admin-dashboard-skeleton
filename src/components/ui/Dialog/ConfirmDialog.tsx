import React from 'react';
import { Typography } from '@mui/material';

import UiDialog, { UiDialogProps } from './Dialog';

type UiConfirmDialogBaseProps = {
    open: UiDialogProps['open'],
    onClose: UiDialogProps['onClose'],
    onConfirm: () => void,
    content: React.ReactNode,
    title: UiDialogProps['title'],
    confirmButtonText?: string,
}
export type UiConfirmDialogProps = UiConfirmDialogBaseProps

const UiConfirmDialog = (props: UiConfirmDialogProps) => {
    const {
        open,
        onClose,
        onConfirm,
        content,
        title,
        confirmButtonText = 'confirm'
    } = props;

    const closeHandler = () => {
        if (onClose) onClose({}, 'backdropClick');
    };
    const confirmHandler = () => {
        onConfirm();
    };

    return (
        <UiDialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            contentProps={{
                sx: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                },
            }}
            footerProps={{
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                },
            }}
            footerNode={
                <>
                    <button
                        onClick={closeHandler}
                    >
                        cancel
                    </button>
                    <button
                        onClick={confirmHandler}
                    >
                        {confirmButtonText}
                    </button>
                </>
            }
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                }}
            >
                {title}
            </Typography>
            <Typography>
                {content}
            </Typography>
        </UiDialog>
    );
};

export default UiConfirmDialog;
