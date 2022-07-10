import { createTheme } from '@mui/material';

import palette from './palette';

declare module '@mui/material/styles' {
    interface Theme {}
    interface ThemeOptions {}
}

const themeCommonProps = {
    shape: {
        borderRadius: 3,
    },
};
const paletteCommonProps = {
    primary: {
        main: palette.primary,
        contrastText: palette.white,
    },
    secondary: {
        main: palette.secondary,
        contrastText: palette.dark,
    },
};

export const light = createTheme({
    palette: {
        mode: 'light',
        ...paletteCommonProps,
    },
    ...themeCommonProps,
});

export const dark = createTheme({
    palette: {
        mode: 'dark',
        ...paletteCommonProps,
    },
    ...themeCommonProps,
});
