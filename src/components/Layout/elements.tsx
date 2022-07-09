import { Box, styled } from '@mui/material';

export const LayoutWrapper = styled(Box)(() => `
    width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`);
export const LayoutContent = styled(Box)(() => `
    flex-grow: 1;
`);
