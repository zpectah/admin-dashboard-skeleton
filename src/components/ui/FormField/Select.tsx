import React, { forwardRef } from 'react';
import { Select, SelectProps } from '@mui/material';

import { optionItemProps } from './types';

type UiSelectBaseProps = {
    options?: optionItemProps[],
};
export type UiSelectProps = UiSelectBaseProps & Partial<SelectProps>;

const UiSelect = forwardRef((props: UiSelectProps, ref) => {
    const {
        options = [],
        ...rest
    } = props;

    return (
        <Select
            inputRef={ref}
            size="small"
            fullWidth
            {...rest}
        />
    );
});

export default UiSelect;
