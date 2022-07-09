import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';

type UiIconButtonBaseProps = {}
export type UiIconButtonProps = UiIconButtonBaseProps & Partial<IconButtonProps>

const UiIconButton = (props: UiIconButtonProps) => {
    const {
        ...rest
    } = props;

    return (
        <IconButton
            {...rest}
        />
    );
};

export default UiIconButton;
