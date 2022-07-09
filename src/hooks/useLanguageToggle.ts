import { useDispatch, useSelector } from 'react-redux';

import { storeProps } from 'types';
import { languageToggle } from '../store/actions';

const useLanguageToggle = () => {
    const { language } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    return {
        language,
        toggle: (lang: string) => dispatch(languageToggle(lang)),
    };
};

export default useLanguageToggle;
