import React from 'react';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';

const UsersDetail = () => {

    const { id } = useBreadcrumbs();

    return (
        <DetailDrawer
            open
            rootList={ROUTES.Users.match as string}
            title="Detail user title ..."
        >
            DetailDrawer content ... UserDetail ... {id}
            <br />
            form ...
        </DetailDrawer>
    );
};

export default UsersDetail;
