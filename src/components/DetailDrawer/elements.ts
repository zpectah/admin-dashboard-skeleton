import {Box, styled} from '@mui/material';

export const DrawerContainer = styled(Box)(({ theme }) => `
    height: 100%;
    position: relative;
    
    ${theme.breakpoints.down('md')} {
        width: 100vw;
    }
    ${theme.breakpoints.up('md')} {
        width: ${theme.breakpoints.values.md}px;
    }    
`);
export const DrawerHeader = styled(Box)(({ theme }) => `
    width: 100%;
    min-height: 75px;
    padding: ${theme.spacing(2.5)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`);
export const DrawerContent = styled(Box)(({ theme }) => `
    padding: ${theme.spacing(2)} ${theme.spacing(2.5)};
`);
