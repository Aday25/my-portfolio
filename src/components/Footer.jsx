import { 
  Box, 
  Typography, 
  Link, 
  IconButton, 
  Stack, 
  useTheme,
  Tooltip,
  Snackbar,
  Alert 
} from '@mui/material';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const email = 'aday.it25@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setOpenSnackbar(true);
        console.log('Email copiado:', email);
      })
      .catch(err => {
        console.error('Error al copiar:', err);
        // Fallback para navegadores antiguos
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          setOpenSnackbar(true);
        } catch (error) {
          console.error('Fallback failed:', error);
        }
        document.body.removeChild(textArea);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        py: 2.5,
        px: 2,
        textAlign: 'center',
        background: isDarkMode
          ? 'linear-gradient(135deg, rgba(10, 35, 66, 0.95) 0%, rgba(26, 58, 95, 0.9) 50%, rgba(5, 26, 56, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(79, 163, 240, 0.95) 0%, rgba(135, 206, 235, 0.9) 50%, rgba(30, 144, 255, 0.95) 100%)',
        backdropFilter: 'blur(12px)',
        borderTop: isDarkMode
          ? '1px solid rgba(0, 180, 216, 0.3)'
          : '1px solid rgba(255, 255, 255, 0.4)',
        boxShadow: isDarkMode
          ? '0 -8px 32px rgba(0, 180, 216, 0.15)'
          : '0 -8px 32px rgba(30, 144, 255, 0.2)',
        color: isDarkMode ? '#e0f7ff' : '#003366',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: isDarkMode
            ? 'linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.6), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)',
        }
      }}
    >
      {/* Efecto de burbujas sutiles en el fondo del footer */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkMode
            ? 'radial-gradient(circle at 20% 80%, rgba(0, 180, 216, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Logo */}
        <Box
          component="img"
          src={logo}
          alt="Logo personal"
          sx={{
            height: 50,
            mb: 1.5,
            filter: isDarkMode
              ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))'
              : 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            transition: 'all 0.3s ease',
            opacity: 0.9,
            '&:hover': {
              transform: 'scale(1.05)',
              opacity: 1,
            }
          }}
        />

        {/* Título principal */}
        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,
            mb: 1.5,
            fontSize: '0.95rem',
            textShadow: isDarkMode
              ? '0 1px 2px rgba(0,0,0,0.5)'
              : '0 1px 2px rgba(255,255,255,0.8)',
            letterSpacing: '0.5px',
          }}
        >
          © {new Date().getFullYear()} Aday Álvarez - Full Stack Developer
        </Typography>

        {/* Iconos y contacto */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          {/* Email - AHORA CLICKABLE PARA COPIAR */}
          <Tooltip title="Click para copiar email" arrow placement="top">
            <Stack 
              direction="row" 
              alignItems="center" 
              spacing={0.5}
              onClick={copyEmailToClipboard}
              sx={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1,
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <EmailIcon
                sx={{
                  fontSize: 20,
                  color: isDarkMode ? '#e0f7ff' : '#003366',
                  opacity: 0.8,
                  transition: 'all 0.3s ease',
                }}
              />
              <Typography
                component="span"
                sx={{
                  color: isDarkMode ? '#e0f7ff' : '#003366',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: isDarkMode ? '#4fd1ff' : '#0066cc',
                  }
                }}
              >
                {t('Contacto')}
              </Typography>
            </Stack>
          </Tooltip>

          {/* Separador sutil */}
          <Box
            sx={{
              width: '1px',
              height: 16,
              backgroundColor: isDarkMode
                ? 'rgba(224, 247, 255, 0.3)'
                : 'rgba(0, 51, 102, 0.3)',
            }}
          />

          {/* GitHub */}
          <Tooltip title="GitHub" arrow placement="top">
            <IconButton
              component="a"
              href="https://github.com/Aday25"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: isDarkMode ? '#e0f7ff' : '#003366',
                transition: 'all 0.3s ease',
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                  color: isDarkMode ? '#4fd1ff' : '#0066cc',
                  backgroundColor: isDarkMode
                    ? 'rgba(79, 209, 255, 0.1)'
                    : 'rgba(0, 102, 204, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          {/* LinkedIn */}
          <Tooltip title="LinkedIn" arrow placement="top">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/adayasc/"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                color: isDarkMode ? '#e0f7ff' : '#003366',
                transition: 'all 0.3s ease',
                opacity: 0.8,
                '&:hover': {
                  opacity: 1,
                  color: isDarkMode ? '#4fd1ff' : '#0077b5',
                  backgroundColor: isDarkMode
                    ? 'rgba(79, 209, 255, 0.1)'
                    : 'rgba(0, 119, 181, 0.1)',
                  transform: 'translateY(-2px)',
                }
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      {/* Snackbar de confirmación */}
      <Snackbar
        open={openSnackbar}
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
    </Box>
  );
}