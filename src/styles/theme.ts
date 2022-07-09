import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Theme {}
    interface ThemeOptions {}
}

export const light = createTheme({
    palette: {
        mode: 'light',
    },
});

export const dark = createTheme({
    palette: {
        mode: 'dark',
    },
});
