import React from 'react';
import { styled, Box } from '@mui/material';

import {
    TOASTS_DESKTOP_WIDTH,
    TOASTS_WRAPPER_ZINDEX,
} from 'const';
import { useToasts } from 'hooks';
import { ToastItem } from 'components';

const Wrapper = styled(Box)(() => `
	width: ${TOASTS_DESKTOP_WIDTH};
	height: auto;
	position: fixed;
	overflow: visible;
	left: calc(50% - (${TOASTS_DESKTOP_WIDTH} / 2));
	bottom: .5rem;
	z-index: ${TOASTS_WRAPPER_ZINDEX};	
`);

const Toasts = () => {
    const { toasts, removeToast } = useToasts();

    return (
        <Wrapper>
            {toasts.map(({ id, onRemove, ...rest}) => (
                <ToastItem
                    key={id}
                    id={id as string}
                    onRemove={(id) => removeToast(id)}
                    {...rest}
                />
            ))}
        </Wrapper>
    );
};

export default Toasts;
