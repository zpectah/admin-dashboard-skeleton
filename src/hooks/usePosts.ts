import { useDispatch, useSelector } from 'react-redux';

import { storeProps, PostsItemProps } from 'types';
import { loadPosts } from '../store/actions';

const usePosts = () => {
    const { Posts } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    const loadHandler = () => {
        const posts: PostsItemProps[] = []; // TODO

        console.log('usePosts', posts);

        dispatch(loadPosts(posts));
    };

    return {
        Posts,
        loadPosts: () => loadHandler,
        createPosts: (data: PostsItemProps) => {},
        updatePosts: (data: PostsItemProps) => {},
        deletePosts: (data: PostsItemProps['id'][]) => {},
    };
};

export default usePosts;
