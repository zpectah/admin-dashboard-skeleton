import { FieldValues, UseFormReturn } from 'react-hook-form';

export type formFieldValuesProps = FieldValues;

export type onSubmitProps = (model: formFieldValuesProps, reset: UseFormReturn['reset']) => void