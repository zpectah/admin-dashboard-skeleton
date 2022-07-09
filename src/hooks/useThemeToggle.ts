import { useDispatch, useSelector } from 'react-redux';

import { storeProps } from 'types';
import { themeToggle } from '../store/actions';

const useThemeToggle = () => {
    const { theme } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    return {
        theme,
        toggle: () => dispatch(themeToggle(newTheme)),
    };
};

export default useThemeToggle;
