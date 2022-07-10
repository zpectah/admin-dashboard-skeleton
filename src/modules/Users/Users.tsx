import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import { DETAIL_PATH_ID } from 'const';
import { useUsers } from 'hooks';
import UsersList from './UsersList';
import UsersDetail from './UsersDetail';

const Users = () => {
    const { loadUsers } = useUsers();

    useEffect(() => {
        loadUsers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
