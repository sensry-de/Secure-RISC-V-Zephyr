import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {main: '#1e40af'}, // indigo-ish
        secondary: {main: '#0d9488'}, // teal-ish
    },
    shape: {borderRadius: 14},
    components: {
        MuiCard: {styleOverrides: {root: {borderRadius: 16}}},
        MuiButton: {defaultProps: {variant: 'contained'}},
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {fontWeight: 700},
        h2: {fontWeight: 700},
    }
});


export default theme;