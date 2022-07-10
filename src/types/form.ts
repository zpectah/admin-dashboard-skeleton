import { FieldValues, UseFormReturn } from 'react-hook-form';

export type formFieldValuesProps = FieldValues;

export type formBaseEventHandlerProps = (model: formFieldValuesProps, form: UseFormReturn) => void;

export type formRowType = 'text'
    | 'email'
    | 'password'
    | 'select'
    | 'select-multiple'
    | 'autocomplete'
    | 'textarea'
    | 'wysiwyg'
    | 'checkbox'
    | 'checkbox-group'
    | 'radio'
    | 'radio-group'
    | 'switch'
    | 'switch-group'
    | 'date'
    | 'time'
    | 'date-time'
    | 'custom';
