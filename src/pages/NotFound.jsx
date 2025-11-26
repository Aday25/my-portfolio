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

// Importa tu imagen - asegúrate de que ops.png esté en la carpeta correcta
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
    boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
  };

  return (
    <Container maxWidth="md" sx={{ py: 8, mt: 8, minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        
        {/* Imagen animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          style={{ marginBottom: '2rem' }}
        >
          <Box
            component="img"
            src={opsImage}
            alt="Página en construcción"
            sx={{
              width: { xs: 200, sm: 280, md: 320 },
              height: 'auto',
              filter: isDarkMode 
                ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))'
                : 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))',
            }}
          />
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ ...glassStyle, p: 4, borderRadius: 4, mb: 4 }}>
            
            {/* Icono de construcción */}
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <ConstructionIcon 
                sx={{ 
                  fontSize: 60, 
                  color: isDarkMode ? '#22d3ee' : '#3b82f6',
                  mb: 2 
                }} 
              />
            </motion.div>

            {/* Título */}
            <Typography 
              variant="h1" 
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: isDarkMode
                  ? '#22d3ee'
                  : 'linear-gradient(45deg, #1e40af 20%, #3b82f6 40%, #2563eb 60%, #1d4ed8 80%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isDarkMode
                  ? '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.3)'
                  : '2px 2px 4px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.1)',
                mb: 2,
              }}
            >
              404
            </Typography>

            {/* Subtítulo */}
            <Typography 
              variant="h4" 
              color="text.primary"
              sx={{ 
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              {t('¡Ups! Página no encontrada')}
            </Typography>

            {/* Mensaje */}
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ 
                mb: 4,
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6
              }}
            >
              {t('Esta sección está en construcción. Estamos trabajando duro para traerte algo increíble muy pronto.')}
            </Typography>

            {/* Botones de acción */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<HomeIcon />}
                onClick={() => navigate('/home')}
                sx={{
                  background: 'linear-gradient(45deg, #22d3ee 30%, #06b6d4 90%)',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    background: 'linear-gradient(45deg, #06b6d4 30%, #0891b2 90%)',
                  }
                }}
              >
                {t('Volver al Inicio')}
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={() => navigate(-1)}
                sx={{
                  borderColor: isDarkMode ? '#22d3ee' : '#3b82f6',
                  color: isDarkMode ? '#22d3ee' : '#3b82f6',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  '&:hover': {
                    borderColor: isDarkMode ? '#06b6d4' : '#2563eb',
                    backgroundColor: isDarkMode ? 'rgba(34, 211, 238, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                  }
                }}
              >
                {t('Volver Atrás')}
              </Button>
            </Box>
          </Box>

          {/* Mensaje adicional animado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontStyle: 'italic',
                mt: 2,
                opacity: 0.8
              }}
            >
              {t('Mientras tanto, ¿por qué no echas un vistazo al resto del portfolio?')}
            </Typography>
          </motion.div>
        </motion.div>

        {/* Elementos decorativos flotantes */}
        <Box sx={{ position: 'relative', mt: 6 }}>
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              style={{
                position: 'absolute',
                left: `${item * 25}%`,
                top: 0,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: item * 0.5,
                ease: "easeInOut"
              }}
            >
              <ConstructionIcon 
                sx={{ 
                  fontSize: 24, 
                  color: isDarkMode ? '#22d3ee' : '#3b82f6',
                  opacity: 0.5
                }} 
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </Container>
  );
}