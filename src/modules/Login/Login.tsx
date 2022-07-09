import React from 'react';

import { onSubmitProps } from 'types';
import LoginForm, { LoginFormModelProps } from './LoginForm';

const Login = () => {
    const submitHandler: onSubmitProps = (data, reset) => {

        console.log('submitHandler', data );

        // ... also reset form data
        reset();

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
