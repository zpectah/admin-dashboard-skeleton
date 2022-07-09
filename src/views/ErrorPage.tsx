import React from 'react';

import { MinimalLayout } from 'components';
import { Error404 } from 'modules';

const ErrorPage = () => (
    <MinimalLayout>
        <Error404 />
    </MinimalLayout>
);

export default ErrorPage;
