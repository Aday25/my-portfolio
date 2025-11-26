// ActionButtons.jsx - Botones flotantes profesionales
import { Box, IconButton, Tooltip, Zoom, Fab, useScrollTrigger } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import { useTheme } from '@mui/material/styles';

export default function ActionButtons() {
  const theme = useTheme();
  const [showSocial, setShowSocial] = useState(false);
  
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

  // Función para descargar CV
  const downloadCV = () => {
    const cvUrl = '/my-portfolio/public/cv/CV-aday-alvarez.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Aday_Alvarez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Botones flotantes principales - Lado derecho */}
      <Box
        sx={{
          position: 'fixed',
          right: { xs: 16, md: 24 },
          bottom: { xs: 80, md: 100 },
          zIndex: 15,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        {/* Redes sociales expandibles */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            transition: 'all 0.3s ease',
            opacity: showSocial ? 1 : 0,
            transform: showSocial ? 'translateY(0)' : 'translateY(20px)',
            pointerEvents: showSocial ? 'auto' : 'none',
          }}
        >
          {/* LinkedIn */}
          <Tooltip title="LinkedIn" placement="left" arrow>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/adayasc/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 3,
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: '#0077b5',
                  color: 'white',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>

          {/* GitHub */}
          <Tooltip title="GitHub" placement="left" arrow>
            <IconButton
              component="a"
              href="https://github.com/Aday25"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 3,
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark' ? '#fff' : '#24292e',
                  color: theme.palette.mode === 'dark' ? '#24292e' : '#fff',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          {/* Email */}
          <Tooltip title="Email" placement="left" arrow>
            <IconButton
              component="a"
              href="mailto:aday.it25@gmail.com"
              sx={{
                bgcolor: 'background.paper',
                boxShadow: 3,
                width: 48,
                height: 48,
                '&:hover': {
                  bgcolor: '#ea4335',
                  color: 'white',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Botón menú redes sociales */}
        <Tooltip title={showSocial ? "Ocultar" : "Redes sociales"} placement="left" arrow>
          <Fab
            color="primary"
            onClick={() => setShowSocial(!showSocial)}
            sx={{
              width: 56,
              height: 56,
              boxShadow: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'linear-gradient(135deg, #2196f3 0%, #1976d2 100%)',
              '&:hover': {
                transform: 'scale(1.1) rotate(90deg)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',
              transform: showSocial ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.3,
                transform: showSocial ? 'rotate(-45deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
              }}
            >
              <Box sx={{ width: 20, height: 2.5, bgcolor: 'white', borderRadius: 1 }} />
              <Box sx={{ width: 20, height: 2.5, bgcolor: 'white', borderRadius: 1 }} />
              <Box sx={{ width: 20, height: 2.5, bgcolor: 'white', borderRadius: 1 }} />
            </Box>
          </Fab>
        </Tooltip>
      </Box>

      {/* Botón Descargar CV - Lado izquierdo */}
      <Zoom in={true}>
        <Tooltip title="Descargar CV" placement="right" arrow>
          <Fab
            color="secondary"
            onClick={downloadCV}
            sx={{
              position: 'fixed',
              left: { xs: 16, md: 24 },
              bottom: { xs: 80, md: 100 },
              zIndex: 15,
              width: 56,
              height: 56,
              boxShadow: 4,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                : 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 6,
              },
              transition: 'all 0.3s ease',
            }}
          >
            <DownloadIcon />
          </Fab>
        </Tooltip>
      </Zoom>

      {/* Botón Volver arriba */}
      <Zoom in={trigger}>
        <Tooltip title="Volver arriba" placement="left" arrow>
          <Fab
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              right: { xs: 16, md: 24 },
              bottom: { xs: 16, md: 24 },
              zIndex: 15,
              width: 56,
              height: 56,
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