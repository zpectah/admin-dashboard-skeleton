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
    FormLabelProps,
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
    formLabelProps?: FormLabelProps,
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
        formLabelProps,
    } = props;

    const { t } = useTranslation('form');
    const field = useController({
        name,
        control,
        rules,
        defaultValue,
    });
    const fieldState = field.fieldState;
    const fieldHasError = fieldState.error && fieldState.isTouched;

    const renderHelpers = useMemo(() => {
        const list = [ ...helpers ];

        return (
            <>
                {list.map((txt) => (
                    <FormHelperText
                        key={txt}
                        {...helpTextProps}
                    >
                        {txt}
                    </FormHelperText>
                ))}
            </>
        );
    }, [ helpTextProps, helpers ]);
    const renderErrors = useMemo(() => {
        const list = [ ...errors ];
        if (fieldState.error && fieldHasError) list.push(t(`validation.${fieldState.error.type}`));

        return (
            <>
                {list.map((txt) => (
                    <FormHelperText
                        key={txt}
                        error
                        {...errorTextProps}
                    >
                        {txt}
                    </FormHelperText>
                ))}
            </>
        );
    }, [ errorTextProps, errors, fieldState.error, fieldHasError, t ]);

    return (
        <Box
            {...wrapperBoxProps}
            sx={{
                mb: 2,
                ...wrapperBoxProps?.sx
            }}
        >
            {label && (
                <FormLabel
                    htmlFor={name}
                    {...formLabelProps}
                >
                    {label}
                </FormLabel>
            )}
            <Box
                {...fieldBoxProps}
            >
                {render({ ...field, id, error: fieldHasError })}
            </Box>
            <Box
                {...textBoxProps}
            >
                {renderHelpers}
                {renderErrors}
            </Box>
        </Box>
    );
};

export default ControlledFormRow;
