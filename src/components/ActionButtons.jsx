import { Box, Button, Fab, Tooltip, Zoom, useScrollTrigger } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export default function ActionButtons({ 
  prevPage = null, 
  prevLabel = 'Anterior',
  nextPage = null, 
  nextLabel = 'Siguiente'
}) {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SOLUCIÓN: Solo navegar, NO hacer scroll (ScrollToTop ya lo hace)
  const handleNavigate = (path) => {
    navigate(path);
    // ELIMINADO: window.scrollTo(0, 0);
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      {/* Botones con ESPACIADO MÍNIMO */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 1, md: 2 },
          mt: 2, // Mínimo espacio arriba
          mb: 1, // Mínimo espacio abajo
        }}
      >
        {/* Botón Anterior */}
        {prevPage && (
          <Tooltip title={t(prevLabel)} arrow placement="top">
            <Button
              variant="contained"
              startIcon={<ArrowBackIcon />}
              onClick={() => handleNavigate(prevPage)}
              sx={{
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  transform: 'translateX(-3px)',
                },
                transition: 'all 0.3s ease',
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

        {/* Botón Home */}
        <Tooltip title={t('Inicio')} arrow placement="top">
          <Fab
            color="primary"
            size="medium"
            onClick={() => handleNavigate('/home')}
            sx={{
              boxShadow: 2,
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 4,
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
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              onClick={() => handleNavigate(nextPage)}
              sx={{
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1.5, sm: 2 },
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  transform: 'translateX(3px)',
                },
                transition: 'all 0.3s ease',
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

      {/* Botón Volver arriba */}
      <Zoom in={trigger}>
        <Tooltip title={t('Volver arriba')} placement="left" arrow>
          <Fab
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              right: { xs: 16, md: 24 },
              bottom: { xs: 16, md: 180 },
              zIndex: 1100,
              width: 48,
              height: 48,
              boxShadow: 3,
              bgcolor: 'background.paper',
              color: 'primary.main',
              border: '2px solid',
              borderColor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.main',
                color: 'white',
                transform: 'translateY(-5px)',
                boxShadow: 5,
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