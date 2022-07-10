import React from 'react';
import { useTranslation } from 'react-i18next';
import { EMAIL_REGEX, TOAST_DEFAULT_TIMEOUT } from 'const';
import { formBaseEventHandlerProps } from 'types';
import { LoginFormModelProps } from './types';
import { useToasts } from 'hooks';
import {
    ControlledForm,
    ControlledFormRow,
    Input,
    Button,
} from 'components';

const LoginForm = () => {
    const { t } = useTranslation();
    const { createToast } = useToasts();

    const submitHandler: formBaseEventHandlerProps = (data, form) => {

        // TODO: submit handler
        console.log('submitHandler', data );
        // TODO

        form.reset();
        createToast({
            title: 'Form successfully submitted',
            context: 'success',
            timeout: TOAST_DEFAULT_TIMEOUT,
        });

    };

    return (
        <ControlledForm
            name="LoginForm"
            formOptions={{
                defaultValues: {
                    email: '',
                    password: '',
                } as LoginFormModelProps,
            }}
            onSubmit={submitHandler}
            render={(form) => (
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
                </>
            )}
            renderActions={(form) => (
                <>
                    <Button
                        secondary
                        onClick={() => form.reset()}
                    >
                        Reset
                    </Button>
                    <Button
                        submit
                        disabled={!form.formState.isValid}
                    >
                        Submit
                    </Button>
                </>
            )}
            actionsBoxProps={{
                sx: {
                    pt: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    gap: 2.5,
                },
            }}
        />
    );
};

export default LoginForm;
