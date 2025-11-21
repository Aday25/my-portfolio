import { Box, Typography, Link, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email'; // Icono más visible
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto',
        py: 2,
        px: 2,
        textAlign: 'center',
        bgcolor: '#7db286ff',
        color: '#000',
        borderTop: '2px solid black',
      }}
    >
      {/* Logo personal */}
      <Box
        component="img"
        src={logo}
        alt="Logo personal"
        sx={{ height: 40, mb: 1 }}
      />

      {/* Línea superior: título principal */}
      <Typography
        variant="body2"
        sx={{ fontWeight: 'bold', mb: 1 }}
      >
        © {new Date().getFullYear()} Portafolio de Aday 
      </Typography>

      {/* Línea inferior: contacto + iconos */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        flexWrap="wrap"
      >
        {/* Icono de email con estilo visible */}
        <EmailIcon
          sx={{
            fontSize: 18,
            color: '#fff',
            backgroundColor: '#000',
            borderRadius: '50%',
            padding: '2px',
          }}
        />

        {/* Enlace real al email */}
        <Link
          href="mailto:aday.it25@gmail.com"
          underline="hover"
          sx={{ color: '#000', fontWeight: 500 }}
        >
          Contacto
        </Link>

        {/* GitHub */}
        <IconButton
          component="a"
          href="https://github.com/Aday25"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#000' }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>

        {/* LinkedIn */}
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/adayasc/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0077b5' }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Box>
  );
}
