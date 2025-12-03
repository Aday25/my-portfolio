import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import CustomThemeProvider from './theme/ThemeContext';
import RealisticAquarium from './components/RealisticAquarium';
import { useThemeMode } from './theme/ThemeContext';
import { useEffect } from 'react'; // Añadir esta importación

// Componente que conecta el acuario con el modo del tema
function AppWithAquarium() {
  const { mode } = useThemeMode();
  
  // Efecto para activar música en cualquier interacción
  useEffect(() => {
    let audioStarted = false;
    
    const startAudioOnInteraction = () => {
      if (!audioStarted && window.audioPlayer) {
        const audioState = window.audioPlayer.getState();
        if (!audioState.playing) {
          console.log('🎵 Activando música por interacción del usuario');
          window.audioPlayer.play();
          audioStarted = true;
          
          // Remover listeners una vez iniciado
          document.removeEventListener('click', startAudioOnInteraction);
          document.removeEventListener('keydown', startAudioOnInteraction);
          document.removeEventListener('touchstart', startAudioOnInteraction);
        }
      }
    };
    
    // Agregar listeners para cualquier interacción
    document.addEventListener('click', startAudioOnInteraction);
    document.addEventListener('keydown', startAudioOnInteraction);
    document.addEventListener('touchstart', startAudioOnInteraction);
    
    console.log('🎵 Listo para activar música en cualquier interacción');
    
    return () => {
      document.removeEventListener('click', startAudioOnInteraction);
      document.removeEventListener('keydown', startAudioOnInteraction);
      document.removeEventListener('touchstart', startAudioOnInteraction);
    };
  }, []);
  
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