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
    const { t } = useTranslation('modules');
    const { createToast } = useToasts();

    const submitHandler: formBaseEventHandlerProps = (data, form) => {

        // TODO: submit handler
        console.log('submitHandler', data );
        // TODO

        form.reset();
        createToast({
            title: t('Login.form.message.success'),
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
                        label={t('Login.form.email.label')}
                        control={form.control}
                        rules={{ required: true, pattern: EMAIL_REGEX }}
                        render={({ field, id, error }) => (
                            <Input
                                type="email"
                                id={id}
                                error={error}
                                placeholder={t('Login.form.email.placeholder')}
                                {...field}
                            />
                        )}
                    />
                    <ControlledFormRow
                        name="password"
                        label={t('Login.form.password.label')}
                        control={form.control}
                        rules={{ required: true }}
                        render={({ field, id, error }) => (
                            <Input
                                type="password"
                                id={id}
                                error={error}
                                placeholder={t('Login.form.password.placeholder')}
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
                        {t('Login.form.btn.reset')}
                    </Button>
                    <Button
                        submit
                        disabled={!form.formState.isValid}
                    >
                        {t('Login.form.btn.submit')}
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
