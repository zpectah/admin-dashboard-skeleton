import React from 'react';
import { Alert } from '@mui/material';

import { useAnnouncementBanner } from 'hooks';
import { CloseButton } from '../ui';

const AnnouncementBanner = () => {
    const { banner, removeBanner } = useAnnouncementBanner();

    return (
        <>
            {banner && (
                <Alert
                    severity="info"
                    action={
                        <CloseButton
                            onClick={removeBanner}
                            size="small"
                            color="inherit"
                            iconProps={{ fontSize: 'small' }}
                        />
                    }
                    sx={{
                        m: 1,
                    }}
                >
                    {banner}
                </Alert>
            )}
        </>
    );
};

export default AnnouncementBanner;
