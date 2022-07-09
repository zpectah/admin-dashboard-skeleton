import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, Zoom } from '@mui/material';

import { TOAST_HIDE_TIMEOUT } from 'const';
import { toastItemProps } from 'types';
import { CloseButton } from '../ui';

export type ToastItemProps = {
    title: string,
    content?: string,
    id: string,
    context?: toastItemProps['context'],
    timeout?: number,
    onRemove: toastItemProps['onRemove'],
}

const ToastItem = (props: ToastItemProps) => {
    const {
        onRemove,
        id,
        title,
        content,
        context = 'info',
        timeout,
    } = props;

    const [ open, setOpen ] = useState(true);

    const closeHandler = () => {
        setOpen(false);
        if (onRemove && id) setTimeout(() => onRemove(id), TOAST_HIDE_TIMEOUT);
    };

    useEffect(() => {
        if (timeout && onRemove && id) setTimeout(() => closeHandler(), timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ id, timeout ]);

    return (
        <Zoom in={open}>
            <Alert
                severity={context}
                icon={false}
                action={
                    <CloseButton
                        onClick={closeHandler}
                        size="small"
                        color="inherit"
                        iconProps={{ fontSize: 'small' }}
                    />
                }
                sx={{
                    mb: 1,
                }}
            >
                <AlertTitle>
                    {title}
                </AlertTitle>
                {content}
            </Alert>
        </Zoom>
    );
};

export default ToastItem;
