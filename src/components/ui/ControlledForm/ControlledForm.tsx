import React, {useMemo} from 'react';
import {
    useForm,
    UseFormReturn,
    UseFormProps,
} from 'react-hook-form';
import {
    Box,
    FormHelperText,
    BoxProps,
    FormHelperTextProps,
} from '@mui/material';

import { formFieldValuesProps, formBaseEventHandlerProps } from 'types';

type ControlledFormBaseProps = {
    children?: React.ReactNode,
    formOptions?: UseFormProps,
    render?: (form: UseFormReturn) => React.ReactNode,
    renderActions?: (form: UseFormReturn) => React.ReactNode,
    onSubmit?: formBaseEventHandlerProps,
    onChange?: formBaseEventHandlerProps,
    onBlur?: formBaseEventHandlerProps,
    onFocus?: formBaseEventHandlerProps,
    onSubmitErrors?: (errors: any, event?: React.BaseSyntheticEvent) => void,
    name?: string,
    actionsBoxProps?: BoxProps,
    helpers?: string[],
    errors?: string[],
    helpTextProps?: FormHelperTextProps,
    errorTextProps?: FormHelperTextProps,
    textBoxProps?: BoxProps,
}
export type ControlledFormProps = ControlledFormBaseProps

const ControlledForm: React.FC<ControlledFormProps> = (props) => {
    const {
        children,
        formOptions,
        render,
        renderActions,
        onSubmit,
        onChange,
        onBlur,
        onFocus,
        onSubmitErrors,
        actionsBoxProps,
        helpers = [],
        errors = [],
        helpTextProps,
        errorTextProps,
        textBoxProps,
        ...rest
    } = props;

    const form = useForm<UseFormProps>({
        mode: 'all',
        ...formOptions,
    });
    const model: formFieldValuesProps = form.watch();

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
    }, [ errorTextProps, errors ]);

    return (
        <form
            onSubmit={form.handleSubmit((data) => onSubmit && onSubmit(data, form))}
            onChange={() => onChange && onChange(model, form)}
            onBlur={() => onBlur && onBlur(model, form)}
            onFocus={() => onFocus && onFocus(model, form)}
            noValidate
            autoComplete="off"
            {...rest}
        >
            {children && children}
            {render && render(form)}
            <Box
                {...textBoxProps}
            >
                {renderHelpers}
                {renderErrors}
            </Box>
            {renderActions && (
                <Box
                    {...actionsBoxProps}
                    sx={{
                        pt: 2,
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 2,
                        ...actionsBoxProps?.sx
                    }}
                >
                    {renderActions(form)}
                </Box>
            )}
        </form>
    );
};

export default ControlledForm;
