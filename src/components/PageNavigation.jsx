import { Box, Button, Fab, Tooltip, Zoom, useScrollTrigger } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

/**
 * Componente de navegación entre páginas
 * 
 * @param {string} prevPage - Ruta de la página anterior (ej: '/about')
 * @param {string} prevLabel - Etiqueta del botón anterior (ej: 'Sobre mí')
 * @param {string} nextPage - Ruta de la página siguiente (ej: '/skills')
 * @param {string} nextLabel - Etiqueta del botón siguiente (ej: 'Habilidades')
 */
export default function PageNavigation({ 
  prevPage = null, 
  prevLabel = 'Anterior',
  nextPage = null, 
  nextLabel = 'Siguiente'
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Detectar scroll para mostrar el botón "Volver arriba"
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  // Función para volver arriba suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Función para navegar (automáticamente hace scroll al top)
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll instantáneo al top
  };

  return (
    <>
      {/* Botones de navegación centrados abajo */}
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 15,
          display: 'flex',
          gap: { xs: 1, md: 2 },
          alignItems: 'center',
          background: theme.palette.mode === 'dark'
            ? 'rgba(30, 41, 59, 0.9)'
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderRadius: 3,
          padding: { xs: 1, md: 1.5 },
          boxShadow: theme.palette.mode === 'dark'
            ? '0 8px 32px rgba(0, 0, 0, 0.5)'
            : '0 8px 32px rgba(33, 150, 243, 0.25)',
          border: '1px solid',
          borderColor: theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(33, 150, 243, 0.2)',
        }}
      >
        {/* Botón Anterior */}
        {prevPage && (
          <Tooltip title={t(prevLabel)} arrow placement="top">
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => handleNavigate(prevPage)}
              sx={{
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                borderColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(33, 150, 243, 0.3)',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(33, 150, 243, 0.1)'
                    : 'rgba(33, 150, 243, 0.05)',
                  transform: 'translateX(-3px)',
                },
                transition: 'all 0.3s ease',
                // Ocultar texto en móvil muy pequeño
                '& .MuiButton-startIcon': {
                  marginRight: { xs: 0, sm: 1 },
                },
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {t(prevLabel)}
              </Box>
            </Button>
          </Tooltip>
        )}

        {/* Botón Home (siempre visible) */}
        <Tooltip title={t('Inicio')} arrow placement="top">
          <Fab
            color="primary"
            size="medium"
            onClick={() => handleNavigate('/home')}
            sx={{
              boxShadow: 3,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 5,
              },
              transition: 'all 0.3s ease',
            }}
          >
            <HomeIcon />
          </Fab>
        </Tooltip>

        {/* Botón Siguiente */}
        {nextPage && (
          <Tooltip title={t(nextLabel)} arrow placement="top">
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={() => handleNavigate(nextPage)}
              sx={{
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                borderColor: theme.palette.mode === 'dark' 
                  ? 'rgba(255, 255, 255, 0.2)' 
                  : 'rgba(33, 150, 243, 0.3)',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(33, 150, 243, 0.1)'
                    : 'rgba(33, 150, 243, 0.05)',
                  transform: 'translateX(3px)',
                },
                transition: 'all 0.3s ease',
                // Ocultar texto en móvil muy pequeño
                '& .MuiButton-endIcon': {
                  marginLeft: { xs: 0, sm: 1 },
                },
              }}
            >
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {t(nextLabel)}
              </Box>
            </Button>
          </Tooltip>
        )}
      </Box>

      {/* Botón Volver arriba (separado, esquina derecha) */}
      <Zoom in={trigger}>
        <Tooltip title={t('Volver arriba')} placement="left" arrow>
          <Fab
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              right: { xs: 16, md: 24 },
              bottom: { xs: 90, md: 110 }, // Más arriba para no chocar con la barra
              zIndex: 16,
              width: 48,
              height: 48,
              boxShadow: 4,
              bgcolor: 'background.paper',
              color: 'primary.main',
              border: '2px solid',
              borderColor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                transform: 'translateY(-5px)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',
            }}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </Zoom>
    </>
  );
}