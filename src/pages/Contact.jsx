import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  useTheme,
  alpha,
  Card
} from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { AnimatedTitle } from '../components/AnimatedTitle';

export default function Contact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Estado para el formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Datos reales de contacto
  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 32 }} />,
      title: t('Email'),
      value: 'aday.it25@gmail.com',
      link: 'mailto:aday.it25@gmail.com',
      color: '#ea4335'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 32 }} />,
      title: 'LinkedIn',
      value: t('Conectemos en LinkedIn'),
      link: 'https://www.linkedin.com/in/adayasc/',
      color: '#0077b5'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 32 }} />,
      title: 'GitHub',
      value: t('Mira mis proyectos'),
      link: 'https://github.com/Aday25',
      color: isDarkMode ? '#ffffff' : '#333333'
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 32 }} />,
      title: t('Ubicación'),
      value: 'Madrid, España',
      link: null,
      color: '#34a853'
    }
  ];

  // Estilo de cristal para todos los elementos
  const glassStyle = {
    background: isDarkMode
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.6))'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
    backdropFilter: 'blur(12px)',
    border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
    boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`
  };

  return (
    <Container maxWidth="lg" sx={{ py: 1, mt: 8 }}>
      <Box sx={{ mb: 3 }}>
        <AnimatedTitle>
          {t('Contacto')}
        </AnimatedTitle>
      </Box>

      {/* 4 Círculos en línea - Responsive */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
        {contactInfo.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  p: 3,
                  borderRadius: '50%',
                  width: { xs: 120, sm: 140, md: 160 },
                  height: { xs: 120, sm: 140, md: 160 },
                  ...glassStyle,
                  position: 'relative',
                  cursor: item.link ? 'pointer' : 'default',
                  '&:hover': {
                    border: `2px solid ${item.color}${isDarkMode ? '80' : '60'}`,
                  }
                }}
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <Box
                  sx={{
                    color: item.color,
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    mb: 0.5
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: '0.7rem', sm: '0.75rem' },
                    lineHeight: 1.2
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}