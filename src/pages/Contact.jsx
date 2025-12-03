import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  Paper,
  Snackbar,
  Alert,
  Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

const MotionPaper = motion(Paper);

export default function Contact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Datos reales de contacto
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: 'Email',
      value: 'aday.it25@gmail.com',
      displayValue: 'aday.it25', // Versión corta para móvil
      action: 'copy',
      color: '#ea4335',
      tooltip: 'Click para copiar'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: 'LinkedIn',
      value: t('Conectemos'),
      link: 'https://www.linkedin.com/in/adayasc/',
      color: '#0077b5',
      tooltip: 'Visitar LinkedIn'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: 'GitHub',
      value: t('Ver proyectos'),
      link: 'https://github.com/Aday25',
      color: '#24292e',
      tooltip: 'Visitar GitHub'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: { xs: 32, sm: 36, md: 40 } }} />,
      title: t('Ubicación'),
      value: 'Madrid, España',
      color: '#34a853',
      tooltip: null
    }
  ];

  // Función para copiar email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aday.it25@gmail.com')
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch(err => {
        console.error('Error al copiar:', err);
      });
  };

  // Función para manejar clics
  const handleClick = (item) => {
    if (item.action === 'copy') {
      handleCopyEmail();
    } else if (item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 1, mt: 4 }}>
      <Box sx={{ mb: 3 }}>
        <AnimatedTitle>
          {t('Contacto')}
        </AnimatedTitle>
      </Box>

      {/* Grid de círculos de contacto - OPTIMIZADO */}
      <Grid container spacing={{ xs: 2, sm: 3 }} justifyContent="center" sx={{ mb: 8 }}>
        {contactInfo.map((item, index) => (
          <Grid 
            item 
            xs={6} 
            sm={3} 
            key={index} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              minHeight: { xs: 180, sm: 190, md: 200 } // Asegura espacio uniforme
            }}
          >
            <Tooltip 
              title={item.tooltip ? t(item.tooltip) : ''} 
              arrow 
              placement="top"
              disableHoverListener={!item.tooltip}
            >
              <MotionPaper
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: item.action || item.link ? 1.08 : 1,
                  y: item.action || item.link ? -6 : 0,
                  transition: { duration: 0.2 }
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  p: { xs: 2, sm: 2.5, md: 3 },
                  borderRadius: '50%',
                  // Tamaños aumentados para mejor legibilidad
                  width: { xs: 170, sm: 180, md: 190 },
                  height: { xs: 170, sm: 180, md: 190 },
                  border: `2px solid ${item.color}${isDarkMode ? '40' : '30'}`,
                  background: isDarkMode
                    ? `linear-gradient(135deg, ${item.color}18, ${item.color}12)`
                    : `linear-gradient(135deg, ${item.color}10, ${item.color}06)`,
                  backdropFilter: 'blur(10px)',
                  position: 'relative',
                  cursor: item.action || item.link ? 'pointer' : 'default',
                  overflow: 'visible', // Cambiado para evitar cortes
                  transition: 'all 0.3s ease',
                  '&:hover': (item.action || item.link) && {
                    border: `2px solid ${item.color}${isDarkMode ? '60' : '50'}`,
                    boxShadow: `0 12px 40px ${item.color}${isDarkMode ? '30' : '25'}`,
                    background: isDarkMode
                      ? `linear-gradient(135deg, ${item.color}25, ${item.color}18)`
                      : `linear-gradient(135deg, ${item.color}15, ${item.color}10)`,
                  }
                }}
                onClick={() => handleClick(item)}
              >
                {/* Icono */}
                <Box
                  sx={{
                    color: item.color,
                    mb: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: isDarkMode ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' : 'none'
                  }}
                >
                  {item.icon}
                </Box>
                
                {/* Título */}
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                    mb: 0.8,
                    color: isDarkMode ? '#ffffff' : '#000000',
                    letterSpacing: '0.5px',
                    textShadow: isDarkMode ? '0 1px 2px rgba(0,0,0,0.5)' : 'none',
                  }}
                >
                  {item.title}
                </Typography>
                
                {/* Valor - Email con tratamiento especial */}
                {item.action === 'copy' ? (
                  <Box sx={{ width: '100%', px: 0.5 }}>
                    {/* Versión móvil - Solo usuario */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: { xs: 'block', sm: 'none' },
                        fontSize: '0.75rem',
                        lineHeight: 1.3,
                        color: isDarkMode ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.85)',
                        fontWeight: 500,
                        fontFamily: 'monospace',
                      }}
                    >
                      {item.displayValue}
                    </Typography>
                    
                    {/* Versión tablet/desktop - Email completo */}
                    <Typography
                      variant="caption"
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        fontSize: { sm: '0.78rem', md: '0.82rem' },
                        lineHeight: 1.3,
                        color: isDarkMode ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.85)',
                        fontWeight: 500,
                        fontFamily: 'monospace',
                        whiteSpace: 'nowrap', // Evita saltos de línea
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' },
                      lineHeight: 1.3,
                      color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)',
                      fontWeight: 500,
                      px: 1,
                    }}
                  >
                    {item.value}
                  </Typography>
                )}
              </MotionPaper>
            </Tooltip>
          </Grid>
        ))}
      </Grid>

      {/* Texto de invitación */}
      <Box sx={{ textAlign: 'center', mb: 6, px: { xs: 2, sm: 0 } }}>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          sx={{ 
            fontStyle: 'italic',
            fontWeight: 700,
            maxWidth: '500px',
            mx: 'auto',
          }}
        >
          {t('¡Espero que hayas disfrutado de la visita! Estaré encantada de leerte 🤗')}
        </Typography>
      </Box>

      {/* Snackbar mejorado */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          variant="filled"
          sx={{ 
            width: '100%',
            fontSize: '0.95rem',
            fontWeight: 500
          }}
        >
          ✓ {t('¡Email copiado al portapapeles!')}
        </Alert>
      </Snackbar>

      <ActionButtons
        prevPage="/certificates"
        prevLabel="Certificados"
      />
    </Container>
  );
}