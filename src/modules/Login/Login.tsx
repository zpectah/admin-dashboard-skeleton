import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { ROUTES } from 'config';
import LoginForm from './LoginForm';

const Login = () => {
    const { t } = useTranslation([ 'views', 'modules' ]);

    return (
        <>
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                }}
            >
                {t('views:login.content.title')}
            </Typography>
            <LoginForm />
            <Box
                sx={{
                    pt: 2.5,
                    textAlign: 'center',
                }}
            >
                <Link to={ROUTES.LostPassword.match as string}>
                    {t('modules:Login.link.lostPassword')}
                </Link>
                &nbsp;|&nbsp;
                <Link to={ROUTES.Registration.match as string}>
                    {t('modules:Login.link.notAccount')}
                </Link>
            </Box>
        </>
    );
};

export default Login;
