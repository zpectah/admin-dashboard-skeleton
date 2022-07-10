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

import { formRowType } from 'types';
import {
    Input,
    Select,
} from '../FormField';

type ControlledFormRowBaseProps = {
    name: string,
    control: UseControllerProps['control'],
    rules?: UseControllerProps['rules'],
    defaultValue?: UseControllerProps['defaultValue'],
    render?: (field: UseControllerReturn & { id?: string, error?: boolean }) => React.ReactNode,
    id?: string,
    label?: string,
    helpers?: string[],
    errors?: string[],
    helpTextProps?: FormHelperTextProps,
    errorTextProps?: FormHelperTextProps,
    wrapperBoxProps?: BoxProps,
    innerBoxProps?: BoxProps,
    fieldBoxProps?: BoxProps,
    textBoxProps?: BoxProps,
    formLabelProps?: FormLabelProps,
    type?: formRowType,
    placeholder?: string,
    required?: boolean,
    fieldAdditionalProps?: any,
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
        innerBoxProps,
        fieldBoxProps,
        textBoxProps,
        formLabelProps,
        type = 'custom',
        placeholder,
        required,
        fieldAdditionalProps,
    } = props;

    const { t } = useTranslation('form');
    const field = useController({
        name,
        control,
        rules: {
            required,
            ...rules
        },
        defaultValue,
    });
    const fieldState = field.fieldState;
    const fieldHasError = fieldState.error && fieldState.isTouched;

    const renderField = useMemo(() => {
        const fieldBaseProps = {
            required,
            ...field.field,
            ...fieldAdditionalProps,
        };

        switch (type) {

            case 'text':
            case 'email':
                return (
                    <Input
                        type={type}
                        id={id}
                        error={fieldHasError}
                        placeholder={placeholder}
                        {...fieldBaseProps}
                    />
                );

            case 'password':
                return (
                    <Input
                        type="password"
                        id={id}
                        error={fieldHasError}
                        placeholder={placeholder}
                        {...fieldBaseProps}
                    />
                );

            // TODO

            case 'custom':
            default:
                if (render) return render({ ...field, id, error: fieldHasError });

        }
    }, [
        field,
        id,
        fieldHasError,
        type,
        render,
        placeholder,
        required,
        fieldAdditionalProps,
    ]);
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
            <Box {...innerBoxProps}>
                {label && (
                    <FormLabel
                        htmlFor={name}
                        required={required}
                        {...formLabelProps}
                    >
                        {label}
                    </FormLabel>
                )}
                <Box {...fieldBoxProps}>
                    {renderField}
                </Box>
            </Box>
            <Box {...textBoxProps}>
                {renderHelpers}
                {renderErrors}
            </Box>
        </Box>
    );
};

export default ControlledFormRow;
