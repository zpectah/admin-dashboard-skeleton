import React from 'react';

import { useSidebarToggle } from 'hooks';

const SidebarToggle = () => {
    const { isOpen, toggle } = useSidebarToggle();

    return (
        <>
            <button
                onClick={toggle}
            >
                menu {isOpen ? 'open' : 'closed'}
            </button>
        </>
    );
};

export default SidebarToggle;
