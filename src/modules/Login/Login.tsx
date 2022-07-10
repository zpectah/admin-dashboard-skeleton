import React from 'react';

import { formBaseEventHandlerProps } from 'types';
import { useToasts } from 'hooks';
import LoginForm from './LoginForm';

const Login = () => {
    const { createToast } = useToasts();

    const submitHandler: formBaseEventHandlerProps = (data, form) => {

        console.log('submitHandler', data );

        form.reset();
        createToast({
            title: 'Form successfully submitted',
        });

    };

    return (
        <>
            <LoginForm
                onSubmit={submitHandler}
            />
        </>
    );
};

export default Login;
