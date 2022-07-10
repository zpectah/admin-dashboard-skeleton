import React from 'react';
import {
    useForm,
    UseFormReturn,
    UseFormProps,
} from 'react-hook-form';

import { formFieldValuesProps, formBaseEventHandlerProps } from 'types';

type ControlledFormBaseProps = {
    children?: React.ReactNode,
    formOptions?: UseFormProps,
    render?: (form: UseFormReturn) => React.ReactNode,
    onSubmit?: formBaseEventHandlerProps,
    onChange?: formBaseEventHandlerProps,
    onBlur?: formBaseEventHandlerProps,
    onFocus?: formBaseEventHandlerProps,
    onSubmitErrors?: (errors: any, event?: React.BaseSyntheticEvent) => void,
    name?: string,
}
export type ControlledFormProps = ControlledFormBaseProps

const ControlledForm: React.FC<ControlledFormProps> = (props) => {
    const {
        children,
        formOptions,
        render,
        onSubmit,
        onChange,
        onBlur,
        onFocus,
        onSubmitErrors,
        ...rest
    } = props;

    const form = useForm<UseFormProps>({
        mode: 'all',
        ...formOptions,
    });
    const model: formFieldValuesProps = form.watch();

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
        </form>
    );
};

export default ControlledForm;
