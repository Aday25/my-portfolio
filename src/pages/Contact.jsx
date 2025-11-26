import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  useTheme,
  alpha,
  Card,
  Paper
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
import ActionButtons from '../components/ActionButtons';

const MotionPaper = motion(Paper);

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

  return (
    <Container maxWidth="lg" sx={{ py: 1, mt: 4 }}>
      <Box sx={{ mb: 3 }}>
        <AnimatedTitle>
          {t('Contacto')}
        </AnimatedTitle>
      </Box>

      {/* 4 Círculos en línea - Responsive */}
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 8 }}>
        {contactInfo.map((item, index) => (
          <Grid item xs={6} sm={3} key={index}>
            <MotionPaper
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -4,
                transition: { duration: 0.2 }
              }}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                borderRadius: '50%',
                width: { xs: 120, sm: 140, md: 160 },
                height: { xs: 120, sm: 140, md: 160 },
                border: `2px solid ${item.color}${isDarkMode ? '30' : '20'}`,
                background: isDarkMode
                  ? `linear-gradient(135deg, ${item.color}15, ${item.color}10)`
                  : `linear-gradient(135deg, ${item.color}08, ${item.color}05)`,
                backdropFilter: 'blur(10px)',
                position: 'relative',
                cursor: item.link ? 'pointer' : 'default',
                overflow: 'hidden',
                '&:hover': {
                  border: `2px solid ${item.color}${isDarkMode ? '50' : '40'}`,
                  boxShadow: `0 8px 32px ${item.color}${isDarkMode ? '25' : '20'}`,
                  background: isDarkMode
                    ? `linear-gradient(135deg, ${item.color}20, ${item.color}15)`
                    : `linear-gradient(135deg, ${item.color}12, ${item.color}08)`
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: item.color,
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
                  justifyContent: 'center',
                  zIndex: 2
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8rem', sm: '0.9rem' },
                  mb: 0.5,
                  color: isDarkMode ? '#ffffff' : '#000000', // Texto blanco en oscuro, negro en claro
                  zIndex: 2,
                  textShadow: isDarkMode ? '1px 1px 2px rgba(0,0,0,0.7)' : 'none'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: { xs: '0.7rem', sm: '0.75rem' },
                  lineHeight: 1.2,
                  zIndex: 2,
                  color: isDarkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.8)', // Texto legible en ambos modos
                  fontWeight: isDarkMode ? 500 : 400
                }}
              >
                {item.value}
              </Typography>
            </MotionPaper>
          </Grid>
        ))}
      </Grid>

      <ActionButtons
        prevPage="/certificates"
        prevLabel="Certificados"
      />
    </Container>
  );
}