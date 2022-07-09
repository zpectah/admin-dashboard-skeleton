import { useDispatch, useSelector } from 'react-redux';

import { TOAST_DEFAULT_TIMEOUT } from 'const';
import { storeProps, toastItemProps } from 'types';
import { addToast, removeToast } from '../store/actions';

const useToasts = () => {
    const { toasts } = useSelector((store: storeProps) => store);
    const dispatch = useDispatch();

    return {
        toasts: toasts.slice().reverse(),
        createToast: (data: toastItemProps) => dispatch(addToast({
            ...data,
        })),
        createSuccessToast: (data: toastItemProps) => dispatch(addToast({
            context: 'success',
            timeout: TOAST_DEFAULT_TIMEOUT,
            ...data,
        })),
        createErrorToast: (data: toastItemProps) => dispatch(addToast({
            context: 'error',
            timeout: (TOAST_DEFAULT_TIMEOUT * 2),
            ...data,
        })),
        removeToast: (id: string) => dispatch(removeToast({
            id,
        })),
    };
};

export default useToasts;
