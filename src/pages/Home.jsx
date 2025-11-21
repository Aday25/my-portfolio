import React, { useState } from 'react'
import { Box, Avatar, Typography, Paper, Button } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { motion, AnimatePresence } from 'framer-motion'
import avatarImg from '../assets/avatar.png'  // Imagen de avatar

export default function Home() {
  // Estado para mostrar u ocultar los datos personales
  const [showData, setShowData] = useState(false)

  // Datos personales con iconos y etiquetas
  const dataItems = [
    { icon: <AccountCircleIcon sx={{ color: '#1976d2', fontSize: 30 }} />, label: 'Aday Álvarez Sánchez-Campíns' },
    { icon: <GitHubIcon sx={{ color: '#090909ff', fontSize: 30 }} />, label: '+34 600 123 456' },
    { icon: <EmailIcon sx={{ color: '#d32f2f', fontSize: 30 }} />, label: 'aday.it25@gmail.com' },
    { icon: <LocationOnIcon sx={{ color: '#fbc02d', fontSize: 30 }} />, label: 'Madrid, España' },
  ]

  return (
    // Caja principal animada con Framer Motion para hacer una entrada suave
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      textAlign="center"
      sx={{ mt: 5, px: 2 }}
    >
      {/* Avatar con estilos, borde y efecto hover */}
      <Avatar
        src={avatarImg}
        alt="Miss Material UI"
        sx={{
          width: 180,
          height: 180,
          mx: 'auto',
          mb: 3,
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

      {/* Título principal */}
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: 1 }}>
        ¡Hola! Mi nombre es Aday
      </Typography>

      {/* Subtítulo o descripción con estilo */}
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontStyle: 'italic',
          maxWidth: 600,
          mx: 'auto',
          lineHeight: 1.4,
        }}
      >
        Programar y diseñar experiencias web me motiva muchísimo; es un entorno tan creativo que siempre estoy construyendo algo nuevo. Aquí tienes la recopilación de todos mis proyectos.
      </Typography>

      {/* Botón para mostrar/ocultar datos personales */}
      <Button
        variant="contained"
        onClick={() => setShowData(prev => !prev)}
        sx={{ mb: 3 }}
      >
        {showData ? 'Ocultar datos personales' : 'Mostrar datos personales'}
      </Button>

      {/* Animación de aparición/desaparición de los datos personales */}
      <AnimatePresence>
        {showData && (
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            elevation={8}
            sx={{
              maxWidth: 600,
              mx: 'auto',
              p: 4,
              borderRadius: 3,
              textAlign: 'left',
              backgroundColor: 'background.paper',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            }}
          >
            {/* Título de la sección con efecto hover en el subrayado */}
            <Typography
              variant="h4"
              gutterBottom
              sx={{
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
                mb: 3,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '50%',
                  height: 4,
                  bottom: 0,
                  left: 0,
                  bgcolor: 'primary.main',
                  borderRadius: 2,
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
            >
              Datos personales
            </Typography>

            {/* Listado de datos personales con iconos y estilos */}
            {dataItems.map(({ icon, label }, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: index === dataItems.length - 1 ? 0 : 2.5,
                  p: 1.5,
                  borderRadius: 2,
                  cursor: 'default',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <Box sx={{ mr: 2 }}>{icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 'medium', userSelect: 'text' }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}
      </AnimatePresence>
    </Box>
  )
}
