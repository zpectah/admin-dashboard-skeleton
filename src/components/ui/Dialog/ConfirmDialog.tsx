import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

import UiDialog, { UiDialogProps } from './Dialog';
import { Button } from '../Button';

type UiConfirmDialogBaseProps = {
    open: UiDialogProps['open'],
    onClose: UiDialogProps['onClose'],
    onConfirm: () => void,
    content: React.ReactNode,
    title: UiDialogProps['title'],
    confirmButtonText?: string,
    cancelButtonText?: string,
}
export type UiConfirmDialogProps = UiConfirmDialogBaseProps

const UiConfirmDialog = (props: UiConfirmDialogProps) => {
    const {
        open,
        onClose,
        onConfirm,
        content,
        title,
        confirmButtonText,
        cancelButtonText,
    } = props;

    const { t } = useTranslation('common');

    const labelConfirm = confirmButtonText ? confirmButtonText : t('btn.confirm');
    const labelCancel = cancelButtonText ? cancelButtonText : t('btn.cancel');

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
                    <Button
                        secondary
                        onClick={closeHandler}
                    >
                        {labelCancel}
                    </Button>
                    <Button
                        primary
                        onClick={confirmHandler}
                    >
                        {labelConfirm}
                    </Button>
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
