import React, { useMemo } from 'react';
import { Button, ButtonProps } from '@mui/material';

type UiButtonBaseProps = {
    primary?: boolean,
    secondary?: boolean,
    warning?: boolean,
    submit?: boolean,
}
export type UiButtonProps = UiButtonBaseProps & Partial<ButtonProps>

const UiButton = (props: UiButtonProps) => {
    const {
        primary,
        secondary,
        warning,
        submit,
        ...rest
    } = props;

    const buttonProperties = useMemo(() => {
        let prop: Partial<ButtonProps> = {};
        if (primary || submit) {
            prop['color'] = 'primary';
            prop['variant'] = 'contained';
            if (submit) prop['type'] = 'submit';
        }
        if (secondary) {
            prop['color'] = 'secondary';
            prop['variant'] = 'outlined';
        }
        if (warning) {
            prop['color'] = 'warning';
            prop['variant'] = 'contained';
        }

        return prop;
    }, [ primary, secondary, warning, submit ]);

    return (
        <Button
            {...buttonProperties}
            {...rest}
        />
    );
};

export default UiButton;
