import { 
  Container, 
  Typography, 
  Box, 
  Button,
  useTheme,
  alpha
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';

import opsImage from '../assets/ops.png';

export default function NotFound() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();
  const { t } = useTranslation();

  const glassStyle = {
    background: isDarkMode 
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.8))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8))',
    backdropFilter: 'blur(12px)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
    borderRadius: 4
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 2, 
      mt: 4, 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 4,
        width: '100%',
        flexDirection: { xs: 'column', md: 'row' } // Columna en móvil, fila en desktop
      }}>
        
        {/* Imagen - Izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ flexShrink: 0 }}
        >
          <Box
            component="img"
            src={opsImage}
            alt="Página no encontrada"
            sx={{
              width: { xs: 200, sm: 250, md: 300 },
              height: 'auto',
              filter: isDarkMode 
                ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))'
                : 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))',
            }}
          />
        </motion.div>

        {/* Contenido - Derecha */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ flexGrow: 1 }}
        >
          <Box sx={{ ...glassStyle, p: 3 }}>
            
            {/* Icono y título en línea */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <motion.div
                animate={{ 
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                }}
              >
                <ConstructionIcon 
                  sx={{ 
                    fontSize: 32, 
                    color: isDarkMode ? '#22d3ee' : '#3b82f6',
                  }} 
                />
              </motion.div>
              
              <Typography 
                variant="h1" 
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #22d3ee, #06b6d4)'
                    : 'linear-gradient(45deg, #1e40af, #3b82f6)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1
                }}
              >
                404
              </Typography>
            </Box>

            {/* Subtítulo */}
            <Typography 
              variant="h5" 
              color="text.primary"
              sx={{ 
                fontWeight: 600,
                mb: 1,
                fontSize: { xs: '1.3rem', sm: '1.5rem' }
              }}
            >
              {t('¡Ups! Página no encontrada')}
            </Typography>

            {/* Mensaje */}
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ 
                mb: 3,
                lineHeight: 1.5,
                fontSize: { xs: '0.9rem', sm: '1rem' }
              }}
            >
              {t('Esta sección está en construcción. Estamos trabajando duro para traerte algo increíble muy pronto.')}
            </Typography>

            {/* Botones compactos */}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="medium"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/home')}
                sx={{
                  background: 'linear-gradient(45deg, #22d3ee, #06b6d4)',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #06b6d4, #0891b2)',
                  }
                }}
              >
                {t('Inicio')}
              </Button>
              
              <Button
                variant="outlined"
                size="medium"
                onClick={() => navigate(-1)}
                sx={{
                  borderColor: isDarkMode ? '#22d3ee' : '#3b82f6',
                  color: isDarkMode ? '#22d3ee' : '#3b82f6',
                  px: 3,
                  py: 1,
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  '&:hover': {
                    borderColor: isDarkMode ? '#06b6d4' : '#2563eb',
                    backgroundColor: isDarkMode ? 'rgba(34, 211, 238, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                  }
                }}
              >
                {t('Atrás')}
              </Button>
            </Box>

            {/* Mensaje pequeño */}
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                display: 'block',
                mt: 1,
                opacity: 0.7,
                fontSize: '0.8rem'
              }}
            >
              {t('Mientras tanto, explora el resto del portfolio')}
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}