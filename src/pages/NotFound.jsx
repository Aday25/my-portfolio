import { 
  Container, 
  Typography, 
  Box, 
  Button,
  useTheme,
  alpha,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import ConstructionIcon from '@mui/icons-material/Construction';

import opsImage from '../assets/ops.png';

const MotionPaper = motion(Paper);

export default function NotFound() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Función para navegar sin abrir nueva ventana
  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Container maxWidth="lg" sx={{ 
      py: 2, 
      mt: 4, 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 4
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

      {/* Card de contenido - Mismo ancho que la imagen */}
      <Box sx={{ 
        width: { xs: '100%', md: 300 },
        maxWidth: { xs: '400px', md: '300px' },
        display: 'flex',
        justifyContent: 'center'
      }}>
        <MotionPaper
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          sx={{
            cursor: 'pointer',
            border: `2px solid #3b82f6${isDarkMode ? '30' : '20'}`,
            borderRadius: 3,
            p: 3,
            background: isDarkMode
              ? `linear-gradient(135deg, #3b82f615, #3b82f610)`
              : `linear-gradient(135deg, #3b82f608, #3b82f605)`,
            backdropFilter: 'blur(10px)',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            '&:hover': {
              border: `2px solid #3b82f6${isDarkMode ? '50' : '40'}`,
              boxShadow: `0 8px 32px #3b82f6${isDarkMode ? '25' : '20'}`,
              background: isDarkMode
                ? `linear-gradient(135deg, #3b82f620, #3b82f615)`
                : `linear-gradient(135deg, #3b82f612, #3b82f608)`
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '3px',
              background: '#3b82f6',
            }
          }}
        >
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
                fontSize: '2.5rem',
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
            variant="h6" 
            color="text.primary"
            sx={{ 
              fontWeight: 600,
              mb: 1,
              fontSize: '1.2rem'
            }}
          >
            {t('¡Ups! Página no encontrada')}
          </Typography>

          {/* Mensaje */}
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ 
              mb: 3,
              lineHeight: 1.5,
              fontSize: '0.9rem'
            }}
          >
            {t('Esta sección está en construcción. Disponible muy pronto 🤗')}
          </Typography>

          {/* Botones compactos - SIN target="_blank" */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Button
              variant="contained"
              size="medium"
              startIcon={<HomeIcon />}
              onClick={() => handleNavigate('/home')}
              sx={{
                background: isDarkMode
                  ? 'linear-gradient(45deg, #22d3ee, #06b6d4)'
                  : 'linear-gradient(45deg, #3b82f6, #2563eb)',
                px: 2,
                py: 1,
                fontWeight: 600,
                fontSize: '0.85rem',
                '&:hover': {
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #06b6d4, #0891b2)'
                    : 'linear-gradient(45deg, #2563eb, #1d4ed8)',
                }
              }}
            >
              {t('Inicio')}
            </Button>
            
            <Button
              variant="contained"
              size="medium"
              onClick={handleGoBack}
              sx={{
                background: isDarkMode
                  ? 'linear-gradient(45deg, #22d3ee, #06b6d4)'
                  : 'linear-gradient(45deg, #3b82f6, #2563eb)',
                px: 2,
                py: 1,
                fontWeight: 600,
                fontSize: '0.85rem',
                '&:hover': {
                  background: isDarkMode
                    ? 'linear-gradient(45deg, #06b6d4, #0891b2)'
                    : 'linear-gradient(45deg, #2563eb, #1d4ed8)',
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
              fontSize: '0.75rem',
              textAlign: 'center'
            }}
          >
            {t('Mientras tanto, explora el resto del portfolio')}
          </Typography>
        </MotionPaper>
      </Box>
    </Container>
  );
}