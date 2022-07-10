import React from 'react';
import { useTranslation } from 'react-i18next';

import { EMAIL_REGEX, TOAST_DEFAULT_TIMEOUT } from 'const';
import { formBaseEventHandlerProps } from 'types';
import { LoginFormModelProps } from './types';
import { useToasts, useProfile } from 'hooks';
import {
    ControlledForm,
    ControlledFormRow,
    Button,
} from 'components';

const LoginForm = () => {
    const { t } = useTranslation('modules');
    const { createToast } = useToasts();
    const { logIn } = useProfile();

    const submitHandler: formBaseEventHandlerProps = (data, form) => {
        // TODO: login handler ---->
        console.log('LoginForm: submitHandler', data );
        form.reset();
        createToast({
            title: t('Login.form.message.success'),
            context: 'success',
            timeout: TOAST_DEFAULT_TIMEOUT,
        });
        setTimeout(() => logIn(), 1000);
        // TODO <----
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
                        type="email"
                        name="email"
                        label={t('Login.form.email.label')}
                        placeholder={t('Login.form.email.placeholder')}
                        control={form.control}
                        rules={{ pattern: EMAIL_REGEX }}
                        required
                    />
                    <ControlledFormRow
                        type="password"
                        name="password"
                        label={t('Login.form.password.label')}
                        placeholder={t('Login.form.password.placeholder')}
                        control={form.control}
                        required
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
