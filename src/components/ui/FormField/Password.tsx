import React, { useState, forwardRef } from 'react';
import { InputAdornment, SvgIconProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { IconButton } from '../Button';
import UiOutlinedInput, { UiOutlinedInputProps } from './OutlinedInput';

type UiPasswordBaseProps = {
    iconProps?: SvgIconProps,
};
export type UiPasswordProps = UiPasswordBaseProps & UiOutlinedInputProps;

const UiPassword = forwardRef((props: UiPasswordProps, ref) => {
    const {
        iconProps,
        ...rest
    } = props;

    const [ type, setType ] = useState<'password' | 'text'>('password');

    const iconProperties: Partial<SvgIconProps> = {
        fontSize: 'small',
        ...iconProps
    };

    const toggleType = () => {
        let state = type;
        if (state === 'password') {
            state = 'text';
        } else {
            state = 'password';
        }
        setType(state);
    };

    return (
        <UiOutlinedInput
            type={type}
            ref={ref}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleType}
                        onMouseDown={(e) => e.preventDefault()}
                        edge="end"
                    >
                        {type === 'password' ? <VisibilityOff {...iconProperties} /> : <Visibility {...iconProperties} />}
                    </IconButton>
                </InputAdornment>
            }
            {...rest}
        />
    );
});

export default UiPassword;
