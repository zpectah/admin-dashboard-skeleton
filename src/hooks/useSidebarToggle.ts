import { useDispatch, useSelector } from 'react-redux';

import { storeProps } from 'types';
import { sidebarToggle } from '../store/actions';

const useSidebarToggle = () => {
    const { sidebar } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    return {
        isOpen: sidebar,
        toggle: () => dispatch(sidebarToggle(!sidebar)),
    };
};

export default useSidebarToggle;
