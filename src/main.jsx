import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import CustomThemeProvider from './theme/ThemeContext';
import RealisticAquarium from './components/RealisticAquarium';
import { useThemeMode } from './theme/ThemeContext';

// Componente que conecta el acuario con el modo del tema
function AppWithAquarium() {
  const { mode } = useThemeMode();
  
  return (
    <RealisticAquarium isDarkMode={mode === 'dark'}>
      <CssBaseline />
      <App />
    </RealisticAquarium>
  );
}

// Punto de entrada principal de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Proveedor del tema personalizado para Material UI */}
    <CustomThemeProvider>
      {/* Acuario animado como fondo con el modo correcto */}
      <AppWithAquarium />
    </CustomThemeProvider>
  </React.StrictMode>
);