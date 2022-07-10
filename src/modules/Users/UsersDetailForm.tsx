import React from 'react';
import { useTranslation } from 'react-i18next';

import { EMAIL_REGEX } from 'const';
import { formBaseEventHandlerProps } from 'types';
import {
    ControlledForm,
    ControlledRow,
    Button,
} from 'components';
import defaultFormValues from './defaultFormValues';

type UsersDetailFormBaseProps = {
    onDrawerClose?: () => void;
};
export type UsersDetailFormProps = UsersDetailFormBaseProps;

const UsersDetailForm = (props: UsersDetailFormProps) => {
    const { onDrawerClose } = props;

    const { t } = useTranslation([ 'common', 'modules' ]);

    const submitHandler: formBaseEventHandlerProps = (data, form) => {
        // TODO: ---->
        console.log('UsersDetailForm: submitHandler', data);
        form.reset();
        if (onDrawerClose) onDrawerClose();
        // TODO <----
    };

    return (
        <ControlledForm
            name="UsersDetailForm"
            formOptions={{
                defaultValues: defaultFormValues,
            }}
            onSubmit={submitHandler}
            renderActions={(form) => (
                <>
                    <Button
                        secondary
                        onClick={onDrawerClose}
                    >
                        {t('common:btn.cancel')}
                    </Button>
                    <Button
                        submit
                        disabled={!form.formState.isValid}
                    >
                        {t('common:btn.submit')}
                    </Button>
                </>
            )}
            render={(form) => (
                <>
                    <ControlledRow
                        type="email"
                        name="email"
                        label={t('modules:Login.form.email.label')} // TODO
                        placeholder={t('modules:Login.form.email.placeholder')} // TODO
                        control={form.control}
                        rules={{ pattern: EMAIL_REGEX }}
                        required
                    />
                    UsersDetailForm
                    <br />

                </>
            )}
        />
    );
};

export default UsersDetailForm;
