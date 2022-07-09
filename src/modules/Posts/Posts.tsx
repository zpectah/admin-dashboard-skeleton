import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { DETAIL_PATH_ID } from 'const';
import { useBreadcrumbs } from 'hooks';
import PostsList from './PostsList';
import PostsDetail from './PostsDetail';

const Posts = () => {
    const { isDetail } = useBreadcrumbs();

    return (
        <>
            <PostsList />
            <Routes>
                <Route
                    path={DETAIL_PATH_ID}
                    element={<PostsDetail />}
                />
            </Routes>
        </>
    );
};

export default Posts;
