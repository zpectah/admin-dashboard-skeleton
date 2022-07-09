import React from 'react';
import { useForm, SubmitHandler, UseFormReturn, UseFormProps } from 'react-hook-form';

import { formFieldValuesProps, onSubmitProps } from 'types';

type ControlledFormBaseProps = {
    children?: React.ReactNode,
    formOptions?: UseFormProps,
    render?: (form: UseFormReturn) => React.ReactNode,
    // onSubmit?: SubmitHandler<formFieldValuesProps>,
    onSubmit?: onSubmitProps,
    onSubmitErrors?: (errors: any, event?: React.BaseSyntheticEvent) => void,
    onChange?: (model: formFieldValuesProps) => void,
    onBlur?: (model: formFieldValuesProps) => void,
    onFocus?: (model: formFieldValuesProps) => void,

    name?: string,
}
export type ControlledFormProps = ControlledFormBaseProps

const ControlledForm: React.FC<ControlledFormProps> = (props) => {
    const {
        children,
        formOptions,
        render,
        onSubmit,
        onSubmitErrors,
        onChange,
        onBlur,
        onFocus,
        ...rest
    } = props;

    const form = useForm<UseFormProps>(formOptions);
    const model: formFieldValuesProps = form.watch();

    return (
        <form
            onSubmit={form.handleSubmit((data) => onSubmit && onSubmit(data, form.reset))}
            onChange={() => onChange && onChange(model)}
            onBlur={() => onBlur && onBlur(model)}
            onFocus={() => onFocus && onFocus(model)}
            {...rest}
        >
            {children && children}
            {render && render(form)}
        </form>
    );
};

export default ControlledForm;
