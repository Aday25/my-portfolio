import { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { getTheme } from './theme';

// Contexto para el modo del tema
export const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
});

// Hook personalizado para usar el tema
export const useThemeMode = () => useContext(ThemeContext);

// Proveedor del tema
export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}