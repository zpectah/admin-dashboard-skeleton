import React from 'react';
import { useTranslation } from 'react-i18next';

import { formBaseEventHandlerProps } from 'types';
import {
    ControlledForm,
    ControlledRow,
    Button,
} from 'components';
import { SettingsLanguageFormProps } from '../types';

const defaultFormValues: SettingsLanguageFormProps = {
    defaultLanguage: 'en-US',
};

const SettingsLanguagesForm = () => {

    const { t } = useTranslation([ 'common', 'modules' ]);

    const submitHandler: formBaseEventHandlerProps = (data, form) => {
        // TODO: ---->
        console.log('PostsDetailForm: submitHandler', data);
        form.reset();
        // TODO <----
    };

    return (
        <ControlledForm
            name="SettingsLanguagesForm"
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

export default SettingsLanguagesForm;
