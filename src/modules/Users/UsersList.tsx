import React from 'react';

import { useUsers } from 'hooks';

const UsersList = () => {
    const { Users } = useUsers();

    return (
        <>
            UsersList
            <br />
            <pre>
                <code>
                    {JSON.stringify(Users, null, 2)}
                </code>
            </pre>
        </>
    );
};

export default UsersList;
