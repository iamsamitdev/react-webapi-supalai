import { createTheme } from '@mui/material/styles'
import { green, grey, indigo } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        primary: {
            main: grey[700],
            light: grey[50],
            dark: grey[900],
        },
        secondary: {
            main: indigo[50],
        },
        success: {
            main: green[500],
            light: green[50],
            dark: green[900],
        },
    }
});


theme = createTheme(theme, {
    typography: {
        link: {
            fontSize: '0.8rem',
            [theme.breakpoints.up('md')]: {
                fontSize: '0.9rem',
            },
            fontWeight: 500,
            color: theme.palette.primary.main,
            display: 'block',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '1.2rem',
            display: 'block',
            fontWeight: 500
        },
        h6: {
            fontSize: '1rem',
        },
        h7: {
            fontSize: '0.8rem', 
        },
        h8: {
            fontSize: '0.7rem', 
        }
    },
});

export default theme;
