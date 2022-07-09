import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    DialogProps,
    DialogTitleProps,
    DialogContentProps,
    DialogActionsProps,
} from '@mui/material';

import { CloseButton } from '../Button';

type UiDialogBaseProps = {
    title?: string,
    headerNode?: React.ReactNode,
    footerNode?: React.ReactNode,
    actionsNode?: React.ReactNode,
    headerProps?: DialogTitleProps,
    contentProps?: DialogContentProps,
    footerProps?: DialogContentProps,
    actionsProps?: DialogActionsProps,
    displayCloseButton?: boolean,
    dividers?: boolean,
}
export type UiDialogProps = UiDialogBaseProps & DialogProps;

const UiDialog: React.FC<UiDialogProps> = (props) => {
    const {
        onClose,
        children,
        title,
        headerNode,
        footerNode,
        actionsNode,
        headerProps,
        contentProps,
        footerProps,
        actionsProps,
        displayCloseButton = true,
        dividers,
        ...rest
    } = props;

    const closeHandler = () => {
        if (onClose) onClose({}, 'backdropClick');
    };

    return (
        <Dialog
            maxWidth="lg"
            fullWidth
            onClose={onClose}
            {...rest}
        >
            {displayCloseButton && (
                <CloseButton
                    onClick={closeHandler}
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 5,
                    }}
                />
            )}
            {(title || headerNode) && (
                <DialogTitle
                    component="div"
                    {...headerProps}
                >
                    {title && (
                        <Typography
                            variant="h5"
                        >
                            {title}
                        </Typography>
                    )}
                    {headerNode && headerNode}
                </DialogTitle>
            )}
            <DialogContent
                dividers={dividers}
                {...contentProps}
            >
                {children}
            </DialogContent>
            {footerNode && (
                <DialogContent
                    {...footerProps}
                >
                    {footerNode}
                </DialogContent>
            )}
            {actionsNode && (
                <DialogActions
                    {...actionsProps}
                >
                    {actionsNode}
                </DialogActions>
            )}
        </Dialog>
    );
};

export default UiDialog;
