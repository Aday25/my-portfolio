import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { useThemeMode } from '../theme/ThemeContext';

// Definimos las opciones del menú con sus etiquetas y rutas
const navItems = [
  { label: 'Inicio', path: '/home' },
  { label: 'Sobre mí', path: '/about' },
  { label: 'Proyectos', path: '/projects' }, 
  { label: 'Habilidades', path: '/skills' },
  { label: 'Certificados', path: '/certificates' },
];

export default function Navbar() {
  // Obtenemos el tema actual y la función para cambiarlo
  const theme = useTheme();
  const { mode, toggleTheme } = useThemeMode();
  const { t, i18n } = useTranslation();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: 20,  // Por encima del acuario
      }}
    >
      <Toolbar>
        {/* Contenedor para los botones del menú que creamos dinámicamente */}
        <Box sx={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap' }}>
          {navItems.map(({ label, path }) => (
            <Button
              key={path}
              component={NavLink}
              to={path}
              sx={{
                color: 'white',
                '&.active': {
                  fontWeight: 'bold',
                  borderBottom: '2px solid white',
                },
                mx: 1,
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Selector de idioma */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 1, mr: 2 }}>
          <Box sx={{ fontSize: '0.8rem', mb: 0.5 }}>Idioma</Box>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Button 
              color="inherit" 
              onClick={() => i18n.changeLanguage('es')}
              sx={{ minWidth: 'auto', p: 0.5 }}
            >
              🇪🇸
            </Button>
            <Button 
              color="inherit" 
              onClick={() => i18n.changeLanguage('en')}
              sx={{ minWidth: 'auto', p: 0.5 }}
            >
              🇬🇧
            </Button>
          </Box>
        </Box>

        {/* Botón para cambiar el modo de color claro/oscuro */}
        <IconButton 
          onClick={toggleTheme} 
          color="inherit"
          sx={{
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'rotate(180deg)',
            }
          }}
        >
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}