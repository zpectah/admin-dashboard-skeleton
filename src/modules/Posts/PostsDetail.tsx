import React from 'react';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';

const PostsDetail = () => {

    const { id } = useBreadcrumbs();

    return (
        <DetailDrawer
            open
            rootList={ROUTES.Posts.match as string}
            title="Detail post title ..."
        >
            DetailDrawer content ... PostsDetail ... {id}
            <br />
            form ...
        </DetailDrawer>
    );
};

export default PostsDetail;
