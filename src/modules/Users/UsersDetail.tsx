import React from 'react';

import { useBreadcrumbs } from 'hooks';

const UsersDetail = () => {
    const { id } = useBreadcrumbs();

    return (
        <>
            UsersDetail ... {id}
        </>
    );
};

export default UsersDetail;
