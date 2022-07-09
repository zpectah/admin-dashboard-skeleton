import React from 'react';
import {
    useController,
    UseControllerProps,
    UseControllerReturn,
} from 'react-hook-form';
import { Box, FormLabel } from '@mui/material';

type ControlledFormRowBaseProps = {
    name: string,
    control: UseControllerProps['control'],
    rules?: UseControllerProps['rules'],
    defaultValue?: UseControllerProps['defaultValue'],
    render: (field: UseControllerReturn & { id?: string }) => React.ReactNode,
    id?: string,
    label?: string,
}
export type ControlledFormRowProps = ControlledFormRowBaseProps

const ControlledFormRow = (props: ControlledFormRowProps) => {
    const {
        name,
        control,
        rules,
        defaultValue,
        render,
        label,
        id = name,
    } = props;

    const field = useController({
        name,
        control,
        rules,
        defaultValue,
    });

    return (
        <Box>
            {label && (
                <Box>
                    <FormLabel
                        htmlFor={name}
                    >
                        {label}
                    </FormLabel>
                </Box>
            )}
            <Box>
                {render({ ...field, id })}
            </Box>
            <Box>
                helpers, errors
            </Box>
        </Box>
    );
};

export default ControlledFormRow;
