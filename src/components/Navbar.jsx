import { 
  AppBar, 
  Toolbar, 
  Button, 
  Box, 
  IconButton, 
  Modal,
  Card,
  CardContent,
  Typography,
  CardActions,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme as useMuiTheme
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { useTranslation } from "react-i18next";
import { useThemeMode } from '../theme/ThemeContext';
import { useState, useEffect } from 'react';

// Definimos las opciones del menú con sus etiquetas y rutas
const navItems = [
  { label: 'Inicio', path: '/home' },
  { label: 'Sobre mí', path: '/about' },
  { label: 'Proyectos', path: '/projects' }, 
  { label: 'Habilidades', path: '/skills' },
  { label: 'Certificados', path: '/certificates' },
  { label: 'Contacto', path: '/contact' },
];

export default function Navbar() {
  const theme = useMuiTheme();
  const { mode, toggleTheme } = useThemeMode();
  const { t, i18n } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Detectar si estamos en móvil (menor a 900px)
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Sincronizar estado del audio
  useEffect(() => {
    const updateAudioState = (event) => {
      setIsPlaying(event.detail.isPlaying);
    };

    // Estado inicial
    if (window.audioPlayer) {
      setIsPlaying(window.audioPlayer.getState().isPlaying);
    }

    // Escuchar cambios de estado
    window.addEventListener('audioStateChange', updateAudioState);

    return () => {
      window.removeEventListener('audioStateChange', updateAudioState);
    };
  }, []);

  // Función para controlar audio
  const togglePlay = () => {
    if (window.audioPlayer) {
      window.audioPlayer.togglePlay();
    }
  };

  // Función para cambiar idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferred-language', lng);
  };

  // Función para descargar CV
  const downloadCV = (language) => {
    const cvFiles = {
      es: '/my-portfolio/public/cv/CV-aday-alvarez.pdf',
      en: '/my-portfolio/public/cv/CV-aday-alvarez-english.pdf'
    };
    
    const cvUrl = cvFiles[language];
    if (cvUrl) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = `CV_${language.toUpperCase()}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    
    setCvModalOpen(false);
  };

  // Cerrar menú móvil al navegar
  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Modal para selección de CV
  const CVModal = () => (
    <Modal
      open={cvModalOpen}
      onClose={() => setCvModalOpen(false)}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ 
        maxWidth: 400, 
        width: '90%',
        mx: 2
      }}>
        <CardContent sx={{ textAlign: 'center', py: 3 }}>
          <Typography variant="h5" gutterBottom>
            {t('Selecciona el CV')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('Elige la versión del CV que deseas descargar')}
          </Typography>
        </CardContent>
        <CardActions sx={{ 
          justifyContent: 'center', 
          gap: 2, 
          pb: 3,
          flexDirection: { xs: 'column', sm: 'row' }
        }}>
          <Button 
            variant="contained" 
            onClick={() => downloadCV('es')}
            startIcon={<DownloadIcon />}
            sx={{ minWidth: 160 }}
          >
            {t('CV en Español')}
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => downloadCV('en')}
            startIcon={<DownloadIcon />}
            sx={{ minWidth: 160 }}
          >
            {t('CV en Inglés')}
          </Button>
        </CardActions>
        <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
          <Button 
            onClick={() => setCvModalOpen(false)}
            color="inherit"
          >
            {t('Cancelar')}
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );

  // Drawer (menú lateral) para móviles
  const MobileDrawer = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)'
            : 'linear-gradient(180deg, #1976d2 0%, #2196f3 100%)',
        }
      }}
    >
      {/* Header del drawer */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        p: 2,
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          Menú
        </Typography>
        <IconButton 
          onClick={() => setMobileMenuOpen(false)}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Lista de navegación */}
      <List sx={{ px: 1, py: 2 }}>
        {navItems.map(({ label, path }) => (
          <ListItem key={path} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={path}
              onClick={handleMobileNavClick}
              sx={{
                color: 'white',
                borderRadius: 2,
                '&.active': {
                  bgcolor: 'rgba(255,255,255,0.2)',
                  fontWeight: 'bold',
                },
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                }
              }}
            >
              <ListItemText 
                primary={t(label)} 
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2 }} />

      {/* Botón CV */}
      <Box sx={{ px: 2, py: 2 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => {
            setCvModalOpen(true);
            setMobileMenuOpen(false);
          }}
          sx={{
            bgcolor: 'rgba(255,255,255,0.9)',
            color: theme.palette.primary.main,
            fontWeight: 'bold',
            '&:hover': {
              bgcolor: 'white',
            }
          }}
        >
          {t('Descargar CV')}
        </Button>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2 }} />

      {/* Control de música móvil */}
      <Box sx={{ px: 2, py: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
          onClick={togglePlay}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.1)',
              borderColor: 'white',
            }
          }}
        >
          {isPlaying ? t('Silenciar') : t('Sonido')}
        </Button>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2 }} />

      {/* Selector de idioma móvil */}
      <Box sx={{ px: 2, py: 2 }}>
        <Typography 
          variant="body2" 
          sx={{ color: 'rgba(255,255,255,0.7)', mb: 1, textAlign: 'center' }}
        >
          {t('Idioma')}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
          <Button 
            variant={i18n.language === 'es' ? 'contained' : 'outlined'}
            onClick={() => changeLanguage('es')}
            sx={{ 
              flex: 1,
              color: i18n.language === 'es' ? theme.palette.primary.main : 'white',
              bgcolor: i18n.language === 'es' ? 'white' : 'transparent',
              borderColor: 'white',
              '&:hover': {
                bgcolor: i18n.language === 'es' ? 'white' : 'rgba(255,255,255,0.1)',
              }
            }}
          >
            🇪🇸 ES
          </Button>
          <Button 
            variant={i18n.language === 'en' ? 'contained' : 'outlined'}
            onClick={() => changeLanguage('en')}
            sx={{ 
              flex: 1,
              color: i18n.language === 'en' ? theme.palette.primary.main : 'white',
              bgcolor: i18n.language === 'en' ? 'white' : 'transparent',
              borderColor: 'white',
              '&:hover': {
                bgcolor: i18n.language === 'en' ? 'white' : 'rgba(255,255,255,0.1)',
              }
            }}
          >
            🇬🇧 EN
          </Button>
        </Box>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mx: 2 }} />

      {/* Botón de tema móvil */}
      <Box sx={{ px: 2, py: 2, textAlign: 'center' }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={toggleTheme}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.1)',
              borderColor: 'white',
            }
          }}
        >
          {mode === 'dark' ? t('Modo Claro') : t('Modo Oscuro')}
        </Button>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: 20,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* VERSIÓN DESKTOP - Se muestra solo en pantallas >= md (900px) */}
          {!isMobile && (
            <>
              {/* Contenedor para los botones del menú */}
              <Box sx={{ display: 'flex', gap: 1 }}>
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
                    }}
                  >
                    {t(label)}
                  </Button>
                ))}
              </Box>

              {/* Controles derechos - Desktop */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* Botón Descargar CV */}
                <Button
                  color="inherit"
                  startIcon={<DownloadIcon />}
                  onClick={() => setCvModalOpen(true)}
                >
                  {t('Descargar CV')}
                </Button>

                {/* Control de música */}
                <IconButton 
                  onClick={togglePlay} 
                  color="inherit"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
                </IconButton>

                {/* Selector de idioma */}
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  mx: 1 
                }}>
                  <Box sx={{ fontSize: '0.8rem', mb: 0.5 }}>{t('Idioma')}</Box>
                  <Box sx={{ display: 'flex', gap: 0.5 }}>
                    <Button 
                      color="inherit" 
                      onClick={() => changeLanguage('es')}
                      sx={{ 
                        minWidth: 'auto', 
                        p: 0.5,
                        border: i18n.language === 'es' ? '1px solid white' : 'none'
                      }}
                    >
                      🇪🇸
                    </Button>
                    <Button 
                      color="inherit" 
                      onClick={() => changeLanguage('en')}
                      sx={{ 
                        minWidth: 'auto', 
                        p: 0.5,
                        border: i18n.language === 'en' ? '1px solid white' : 'none'
                      }}
                    >
                      🇬🇧
                    </Button>
                  </Box>
                </Box>

                {/* Botón tema */}
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
              </Box>
            </>
          )}

          {/* VERSIÓN MÓVIL - Se muestra solo en pantallas < md (900px) */}
          {isMobile && (
            <>
              {/* Logo o título (opcional) */}
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Portfolio
              </Typography>

              {/* Controles derechos móvil */}
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* Control de música móvil */}
                <IconButton 
                  onClick={togglePlay} 
                  color="inherit"
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
                </IconButton>

                {/* Botón tema móvil */}
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

                {/* Botón menú hamburguesa */}
                <IconButton
                  color="inherit"
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{
                    '&:hover': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Modales y Drawers */}
      <CVModal />
      <MobileDrawer />
    </>
  );
}