import React from 'react';

import { ROUTES } from 'config';
import { useBreadcrumbs } from 'hooks';
import { DetailDrawer } from 'components';
import PostsDetailForm from './PostsDetailForm';

const PostsDetail = () => {

    const { id } = useBreadcrumbs();

    return (
        <DetailDrawer
            open
            rootList={ROUTES.Posts.match as string}
            title="Detail post title ..."
            render={(onClose) => (
                <PostsDetailForm
                    onDrawerClose={onClose}
                />
            )}
        />
    );
};

export default PostsDetail;
