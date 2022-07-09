import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DETAIL_PATH_ID } from 'const';
import { useBreadcrumbs } from 'hooks';
import UsersList from './UsersList';
import UsersDetail from './UsersDetail';

const Users = () => {
    const { isDetail } = useBreadcrumbs();

    return (
        <>
            <UsersList />
            <Routes>
                <Route
                    path={DETAIL_PATH_ID}
                    element={<UsersDetail />}
                />
            </Routes>
        </>
    );
};

export default Users;
