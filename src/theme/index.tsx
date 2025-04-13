// theme.ts
import { blue, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    background: {
        default: grey[400], 
        paper: '#fff', 
    }, 
    text: {
        primary: '#20283e', 
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
});

export default theme;
