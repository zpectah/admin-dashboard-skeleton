import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { Button } from 'components';

const Error404 = () => {
    const { t } = useTranslation('views');

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h1"
            >
                {t('error.content.title')}
            </Typography>
            <Typography
                variant="subtitle1"
            >
                {t('error.content.description')}
            </Typography>
            <Button
                primary
                href="/"
                sx={{
                    mt: 5,
                }}
            >
                {t('error.content.link')}
            </Button>
        </Box>
    );
}

export default Error404;
