import React from 'react';
import { Container, ContainerProps } from '@mui/material';

import {
    HEADER_HEIGHT,
    SIDEBAR_WIDTH,
    TRANSITION_DEFAULT_DURATION,
} from 'const';
import { useSidebarToggle } from 'hooks';
import LayoutBase, { LayoutBaseProps } from './LayoutBase';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { Breadcrumbs } from '../Breadcrumbs';
import { AnnouncementBanner } from '../AnnouncementBanner';
import { LayoutContent } from './elements';

export type BaseLayoutProps = {
    containerProps?: ContainerProps,
    disableBreadcrumbs?: boolean,
} & Partial<LayoutBaseProps>

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
    const {
        children,
        containerProps,
        disableBreadcrumbs,
        ...rest
    } = props;

    const { isOpen } = useSidebarToggle();

    return (
        <LayoutBase {...rest}>
            <Header />
            <LayoutContent
                sx={{
                    width: isOpen ? `calc(100% - ${SIDEBAR_WIDTH})` : '100%',
                    paddingTop: HEADER_HEIGHT,
                    position: 'relative',
                    left: isOpen ? SIDEBAR_WIDTH : 0,
                    transition: `width ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s, left ${TRANSITION_DEFAULT_DURATION} ease-in-out 0s`,
                }}
            >
                <AnnouncementBanner />
                <Container
                    maxWidth="lg"
                    {...containerProps}
                >
                    {!disableBreadcrumbs && <Breadcrumbs />}
                    {children}
                </Container>
            </LayoutContent>
            <Footer sidebarOpen={isOpen} />
            <Sidebar />
        </LayoutBase>
    );
};

export default BaseLayout;
