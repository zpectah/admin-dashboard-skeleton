import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import LoginForm from './LoginForm';

const Login = () => {
    const { t } = useTranslation();

    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                }}
            >
                Login to system
            </Typography>
            <LoginForm />
            <Box
                sx={{
                    pt: 2.5,
                    textAlign: 'center',
                }}
            >
                <a href="/">
                    Lost password
                </a>
                &nbsp;|&nbsp;
                <a href="/">
                    Dont have account yet?
                </a>
            </Box>
        </>
    );
};

export default Login;
