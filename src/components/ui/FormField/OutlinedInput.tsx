import React, { forwardRef } from 'react';
import { OutlinedInput, OutlinedInputProps } from '@mui/material';

type UiOutlinedInputBaseProps = {};
export type UiOutlinedInputProps = UiOutlinedInputBaseProps & OutlinedInputProps;

const UiOutlinedInput = forwardRef((props: UiOutlinedInputProps, ref) => {
    const { ...rest } = props;

    return (
        <OutlinedInput
            inputRef={ref}
            size="small"
            fullWidth
            {...rest}
        />
    );
});

export default UiOutlinedInput;
