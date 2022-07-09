import React from 'react';
import { Container, ContainerProps } from '@mui/material';

import LayoutBase, { LayoutBaseProps } from './LayoutBase';
import { Footer } from '../Footer';
import { LayoutContent } from './elements';

export type MinimalLayoutProps = {
    containerProps?: ContainerProps,
} & Partial<LayoutBaseProps>

const MinimalLayout: React.FC<MinimalLayoutProps> = (props) => {
    const {
        children,
        containerProps,
        ...rest
    } = props;

    return (
        <LayoutBase {...rest}>
            <LayoutContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Container
                    maxWidth="md"
                    {...containerProps}
                >
                    {children}
                </Container>
            </LayoutContent>
            <Footer />
        </LayoutBase>
    );
};

export default MinimalLayout;
