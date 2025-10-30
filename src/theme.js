import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {main: '#64748b'}, // bluish gray
        secondary: {main: '#0d9488'}, // teal-ish
    },
    shape: {borderRadius: 14},
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    backgroundColor: '#f4f6fb',
                    border: '1px solid rgba(100, 116, 139, 0.12)',
                    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)'
                }
            }
        },
        MuiButton: {defaultProps: {variant: 'contained'}},
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        h1: {fontWeight: 700},
        h2: {fontWeight: 700},
    }
});


export default theme;
