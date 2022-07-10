import React from 'react';
import { useTranslation } from 'react-i18next';

import { formBaseEventHandlerProps } from 'types';
import {
    ControlledForm,
    ControlledFormRow,
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
            render={(form) => {

                return (
                    <>
                        UsersDetailForm
                        <br />

                    </>
                );
            }}
        />
    );
};

export default UsersDetailForm;
