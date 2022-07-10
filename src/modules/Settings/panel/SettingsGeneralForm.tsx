import React from 'react';
import { useTranslation } from 'react-i18next';

import { formBaseEventHandlerProps } from 'types';
import {
    ControlledForm,
    ControlledRow,
    Button,
} from 'components';
import { SettingsGeneralFormProps } from '../types';

const defaultFormValues: SettingsGeneralFormProps = {
    test: '',
};

const SettingsGeneralForm = () => {

    const { t } = useTranslation([ 'common', 'modules' ]);

    const submitHandler: formBaseEventHandlerProps = (data, form) => {
        // TODO: ---->
        console.log('PostsDetailForm: submitHandler', data);
        form.reset();
        // TODO <----
    };

    return (
        <ControlledForm
            name="SettingsGeneralForm"
            formOptions={{
                defaultValues: defaultFormValues,
            }}
            onSubmit={submitHandler}
            renderActions={(form) => (
                <>
                    <Button
                        submit
                        disabled={!form.formState.isValid}
                    >
                        {t('common:btn.update')}
                    </Button>
                </>
            )}
            render={(form) => (
                <>SettingsContentForm form fields</>
            )}
        />
    );
};

export default SettingsGeneralForm;
