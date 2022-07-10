import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';

const UsersDetail = () => {

    const { id } = useBreadcrumbs();
    const navigate = useNavigate();

    const closeHandler = () => navigate(ROUTES.Users.match as string);

    return (
        <DetailDrawer
            open
            onClose={closeHandler}
            title="Detail user title ..."
        >
            DetailDrawer content ... UserDetail ... {id}
            <br />
            form ...
        </DetailDrawer>
    );
};

export default UsersDetail;
