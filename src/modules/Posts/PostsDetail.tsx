import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';

const PostsDetail = () => {

    const { id } = useBreadcrumbs();
    const navigate = useNavigate();

    const closeHandler = () => navigate(ROUTES.Posts.match as string);

    return (
        <DetailDrawer
            open
            onClose={closeHandler}
            title="Detail post title ..."
        >
            DetailDrawer content ... PostsDetail ... {id}
            <br />
            form ...
        </DetailDrawer>
    );
};

export default PostsDetail;
