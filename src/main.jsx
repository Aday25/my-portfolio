import React from 'react'
import ReactDOM from 'react-dom/client'
import './i18n';
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import CustomThemeProvider from './theme/ThemeContext'

// Punto de entrada principal de la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Proveedor del tema personalizado para Material UI */}
    <CustomThemeProvider>
      {/* CssBaseline resetea estilos CSS para que la app tenga una base uniforme */}
      <CssBaseline />
      {/* Renderizamos el componente raíz de la app */}
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
)