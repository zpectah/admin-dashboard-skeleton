import React from 'react';
import { SvgIconProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import IconButton, { UiIconButtonProps } from './IconButton';

type UiCloseButtonBaseProps = {
    iconProps?: Partial<SvgIconProps>
};
export type UiCloseButtonProps = UiCloseButtonBaseProps & Partial<UiIconButtonProps>;

const UiCloseButton = (props: UiCloseButtonProps) => {
    const {
        iconProps,
        ...rest
    } = props;

    return (
        <IconButton
            {...rest}
        >
            <CloseIcon
                {...iconProps}
            />
        </IconButton>
    );
};

export default UiCloseButton;
