import React from 'react';
import { Box } from '@mui/material';

import { onSubmitProps } from 'types';
import {
    ControlledForm,
    ControlledFormRow,
    Input,
    Button,
} from 'components';

export type LoginFormModelProps = {
    email: string,
    password: string,
}
export type LoginFormProps = {
    onSubmit: onSubmitProps,
}

const LoginForm = (props: LoginFormProps) => {
    const { onSubmit } = props;

    return (
        <ControlledForm
            name="LoginForm"
            formOptions={{
                mode: 'all',
                defaultValues: {
                    email: '',
                    password: '',
                },
            }}
            onSubmit={onSubmit}
            render={(form) => {
                const { isValid } = form.formState;
                console.log('form', form);
                return (
                    <>
                        <ControlledFormRow
                            name="email"
                            label="E-mail"
                            control={form.control}
                            // rules={{ required: true }}
                            render={({ field, id }) => (
                                <Input
                                    type="email"
                                    id={id}
                                    {...field}
                                />
                            )}
                        />
                        <ControlledFormRow
                            name="password"
                            label="Password"
                            control={form.control}
                            // rules={{ required: true }}
                            render={({ field, id }) => (
                                <Input
                                    type="password"
                                    id={id}
                                    {...field}
                                />
                            )}
                        />
                        <Box>
                            <Button
                                submit
                                disabled={!isValid}
                            >
                                Submit
                            </Button>
                            <Button
                                secondary
                                onClick={() => form.reset()}
                            >
                                Reset
                            </Button>
                        </Box>
                    </>
                );
            }}
        />
    );
};

export default LoginForm;
