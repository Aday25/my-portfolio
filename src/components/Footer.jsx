// Footer.jsx - Versión mejorada que siempre queda abajo
import { Box, Typography, Link, IconButton, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.png';

export default function Footer() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        zIndex: 20,
        width: '100%',
        // NO usar mt: 'auto' aquí - se gestiona en App.jsx
        py: 2.5,
        px: 2,
        textAlign: 'center',
        // Efecto acuático degradado profesional
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
          {/* Email */}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <EmailIcon
              sx={{
                fontSize: 20,
                color: isDarkMode ? '#e0f7ff' : '#003366',
                opacity: 0.8,
              }}
            />
            <Link
              href="mailto:aday.it25@gmail.com"
              underline="hover"
              sx={{
                color: isDarkMode ? '#e0f7ff' : '#003366',
                fontWeight: 500,
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                opacity: 0.9,
                '&:hover': {
                  opacity: 1,
                  color: isDarkMode ? '#4fd1ff' : '#0066cc',
                }
              }}
            >
              Contacto
            </Link>
          </Stack>

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

          {/* LinkedIn */}
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
        </Stack>
      </Box>
    </Box>
  );
}