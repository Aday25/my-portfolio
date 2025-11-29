import React from 'react'
import { Box, Avatar, Typography, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import avatarImg from '../assets/avatar.png'

export default function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      textAlign="center"
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        px: 2,
        // Fondo transparente - el acuario se verá detrás
        backgroundColor: 'transparent',
      }}
    >
      <Avatar
        src={avatarImg}
        alt="Aday Álvarez"
        sx={{
          width: { xs: 120, md: 180 },
          height: { xs: 120, md: 180 },
          mx: 'auto',
          mb: 2,
          mt: 4,
          border: '4px solid',
          borderColor: 'primary.main',
          boxShadow: '0 0 10px rgba(25, 118, 210, 0.6)',
          cursor: 'pointer',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      />

      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          letterSpacing: 1,
          fontSize: { xs: '2rem', md: '3rem' },
          // Usa los colores del tema, no fijos
          color: 'text.primary',
        }}
      >
        {t('¡Hola! Mi nombre es Aday')}
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontStyle: 'italic',
          maxWidth: 600,
          mx: 'auto',
          lineHeight: 1.6,
          fontSize: { xs: '1rem', md: '1.25rem' }
        }}
      >
        {t('Programar y diseñar experiencias web me motiva muchísimo. Es un entorno tan creativo que siempre estoy construyendo algo nuevo. Aquí encontrarás la recopilación de todos mis proyectos.')}
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/about')}
        sx={{
          mb: 3,
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
        }}
      >
        {t('Conóceme Mejor')}
      </Button>
    </Box>
  )
}