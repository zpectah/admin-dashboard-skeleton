import React from 'react';
import { styled, Box } from '@mui/material';

import { SCROLLBAR_DEFAULT_WIDTH } from '../../../const';

const Wrapper = styled(Box)(() => `
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
`);
const WrapperScrollable = styled(Box)(() => `
	width: calc(100% + ${SCROLLBAR_DEFAULT_WIDTH});
	height: 100%;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
`);
const WrapperContent = styled(Box)(() => `
	width: calc(100% - ${SCROLLBAR_DEFAULT_WIDTH});
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`);

export type ScrollableProps = {
    children?: React.ReactNode,
}

const Scrollable: React.FC<ScrollableProps> = (props) => {
    const { children } = props;

    return (
        <Wrapper>
            <WrapperScrollable>
                <WrapperContent>
                    {children}
                </WrapperContent>
            </WrapperScrollable>
        </Wrapper>
    );
};

export default Scrollable;
