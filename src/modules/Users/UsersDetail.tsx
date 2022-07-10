import React from 'react';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';
import UsersDetailForm from './UsersDetailForm';

const UsersDetail = () => {

    const { id } = useBreadcrumbs();

    return (
        <DetailDrawer
            open
            rootList={ROUTES.Users.match as string}
            title="Detail user title ..."
            render={(onClose) => (
                <UsersDetailForm
                    onDrawerClose={onClose}
                />
            )}
        />
    );
};

export default UsersDetail;
