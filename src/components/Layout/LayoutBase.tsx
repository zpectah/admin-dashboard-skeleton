import React, { useEffect } from 'react';

import { useBreadcrumbs } from 'hooks';
import { setDocumentMeta } from 'utils';
import { LayoutWrapper } from './elements';

export type LayoutBaseProps = {
    children?: React.ReactNode,
    meta?: {
        title?: string,
        description?: string,
    },
}
const LayoutBase: React.FC<LayoutBaseProps> = (props) => {
    const {
        children,
        meta,
    } = props;

    const breadcrumbs = useBreadcrumbs();

    useEffect(() => setDocumentMeta(
        meta?.title ? meta.title : breadcrumbs.meta.title,
        meta?.description ? meta.description : breadcrumbs.meta.description,
    ));

    return (
        <LayoutWrapper>
            {children}
        </LayoutWrapper>
    );
};

export default LayoutBase;
