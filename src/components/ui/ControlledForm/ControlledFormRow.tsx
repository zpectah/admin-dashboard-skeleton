import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
    useController,
    UseControllerProps,
    UseControllerReturn,
} from 'react-hook-form';
import {
    Box,
    FormLabel,
    FormHelperText,
    BoxProps,
    FormHelperTextProps,
} from '@mui/material';

type ControlledFormRowBaseProps = {
    name: string,
    control: UseControllerProps['control'],
    rules?: UseControllerProps['rules'],
    defaultValue?: UseControllerProps['defaultValue'],
    render: (field: UseControllerReturn & { id?: string, error?: boolean }) => React.ReactNode,
    id?: string,
    label?: string,
    helpers?: string[],
    errors?: string[],
    helpTextProps?: FormHelperTextProps,
    errorTextProps?: FormHelperTextProps,
    wrapperBoxProps?: BoxProps,
    fieldBoxProps?: BoxProps,
    textBoxProps?: BoxProps,
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
        helpers = [],
        errors = [],
        helpTextProps,
        errorTextProps,
        wrapperBoxProps,
        fieldBoxProps,
        textBoxProps,
    } = props;

    const { t } = useTranslation('form');
    const field = useController({
        name,
        control,
        rules,
        defaultValue,
    });
    const fieldState = field.fieldState;

    const renderHelpers = useMemo(() => {
        const list = [ ...helpers ];

        return (
            <Box
                {...textBoxProps}
            >
                {list.map((txt) => (
                    <FormHelperText
                        key={txt}
                        {...helpTextProps}
                    >
                        {txt}
                    </FormHelperText>
                ))}
            </Box>
        );
    }, [ helpTextProps, helpers, textBoxProps ]);
    const renderErrors = useMemo(() => {
        const list = [ ...errors ];
        if (fieldState.isTouched && fieldState.error) list.push(t(`validation.${fieldState.error.type}`));

        return (
            <Box
                {...textBoxProps}
            >
                {list.map((txt) => (
                    <FormHelperText
                        key={txt}
                        error
                        {...errorTextProps}
                    >
                        {txt}
                    </FormHelperText>
                ))}
            </Box>
        );
    }, [ errorTextProps, errors, fieldState.error, fieldState.isTouched, t, textBoxProps ]);

    return (
        <Box
            {...wrapperBoxProps}
        >
            {label && (
                <FormLabel
                    htmlFor={name}
                >
                    {label}
                </FormLabel>
            )}
            <Box
                {...fieldBoxProps}
            >
                {render({ ...field, id, error: !!fieldState.error && fieldState.isTouched })}
            </Box>
            {renderHelpers}
            {renderErrors}
        </Box>
    );
};

export default ControlledFormRow;
