import React from 'react';
import { Box } from '@mui/material';

import { EMAIL_REGEX } from 'const';
import { formBaseEventHandlerProps } from 'types';
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
    onSubmit: formBaseEventHandlerProps,
}

const LoginForm = (props: LoginFormProps) => {
    const { onSubmit } = props;

    return (
        <ControlledForm
            name="LoginForm"
            formOptions={{
                defaultValues: {
                    email: '',
                    password: '',
                },
            }}
            onSubmit={onSubmit}
            render={(form) => {
                const { isValid } = form.formState;

                return (
                    <>
                        <ControlledFormRow
                            name="email"
                            label="E-mail"
                            control={form.control}
                            rules={{ required: true, pattern: EMAIL_REGEX }}
                            render={({ field, id, error }) => (
                                <Input
                                    type="email"
                                    id={id}
                                    error={error}
                                    {...field}
                                />
                            )}
                        />
                        <ControlledFormRow
                            name="password"
                            label="Password"
                            control={form.control}
                            rules={{ required: true }}
                            render={({ field, id, error }) => (
                                <Input
                                    type="password"
                                    id={id}
                                    error={error}
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
