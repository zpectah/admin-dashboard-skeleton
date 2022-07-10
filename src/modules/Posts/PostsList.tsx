import React from 'react';

import { usePosts } from 'hooks';

const PostsList = () => {
    const { Posts } = usePosts();

    return (
        <>
            PostsList
            <br />
            <pre>
                <code>
                    {JSON.stringify(Posts, null, 2)}
                </code>
            </pre>
        </>
    );
};

export default PostsList;
