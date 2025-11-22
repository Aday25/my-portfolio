import { createTheme } from '@mui/material/styles';

// Función para crear el tema según el modo
export const getTheme = (mode) => createTheme({
  palette: {
    mode: mode,
    primary: {
      main: mode === 'light' ? '#1976d2' : '#90caf9',
    },
    secondary: {
      main: mode === 'light' ? '#9c27b0' : '#ce93d8',
    },
    // IMPORTANTE: Hacer el fondo transparente para que se vea el acuario
    background: {
      default: 'transparent',
      paper: mode === 'light' 
        ? 'rgba(255, 255, 255, 0.85)' 
        : 'rgba(18, 18, 18, 0.75)',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    // Hacer que todos los componentes MUI respeten el fondo transparente
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'transparent',
          backgroundImage: 'none',
        },
      },
    },
    // Papers con fondo semitransparente para mantener legibilidad
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    // AppBar semitransparente
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === 'light' 
            ? 'rgba(25, 118, 210, 0.95)' 
            : 'rgba(18, 18, 18, 0.95)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export default getTheme;