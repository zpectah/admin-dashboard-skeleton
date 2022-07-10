import React, { forwardRef } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type UiInputBaseProps = {};
export type UiInputProps = UiInputBaseProps & TextFieldProps;

const UiInput = forwardRef((props: UiInputProps, ref) => {
    const { ...rest } = props;

    return (
        <TextField
            inputRef={ref}
            size="small"
            fullWidth
            {...rest}
        />
    );
});

export default UiInput;
