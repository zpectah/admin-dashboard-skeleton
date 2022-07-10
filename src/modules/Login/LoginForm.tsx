import React from 'react';
import { useTranslation } from 'react-i18next';

import { EMAIL_REGEX, TOAST_DEFAULT_TIMEOUT } from 'const';
import { formBaseEventHandlerProps } from 'types';
import { useToasts, useProfile } from 'hooks';
import {
    ControlledForm,
    ControlledFormRow,
    Button,
} from 'components';
import defaultFormValues from './defaultFormValues';

const LoginForm = () => {
    const { t } = useTranslation('modules');
    const { createToast } = useToasts();
    const { logIn } = useProfile();

    const submitHandler: formBaseEventHandlerProps = (data, form) => {
        // TODO: ---->
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
                defaultValues: defaultFormValues,
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
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        />
    );
};

export default LoginForm;
