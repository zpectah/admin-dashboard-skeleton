import { FieldValues, UseFormReturn } from 'react-hook-form';

export type formFieldValuesProps = FieldValues;

export type formBaseEventHandlerProps = (model: formFieldValuesProps, form: UseFormReturn) => void
