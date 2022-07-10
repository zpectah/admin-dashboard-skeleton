import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';

import { DETAIL_PATH_ID } from 'const';
import { usePosts } from 'hooks';
import PostsList from './PostsList';
import PostsDetail from './PostsDetail';

const Posts = () => {
    const { loadPosts } = usePosts();

    useEffect(() => {
        loadPosts();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
