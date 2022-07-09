import React from 'react';

import { useBreadcrumbs } from 'hooks';

const PostsDetail = () => {
    const { id } = useBreadcrumbs();

    return (
        <>
            PostsDetail ... {id}
        </>
    );
};

export default PostsDetail;
