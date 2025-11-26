import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Modal, IconButton, Chip, Button, Avatar, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

// Importar imágenes de las píldoras
import arquitecturasImg from '../assets/projects/arquitecturas.jpg';
import httpImg from '../assets/projects/http.jpg';
import materialImg from '../assets/projects/material.jpg';
import pasteleriaImg from '../assets/projects/pasteleria.jpg';
import yukiImg from '../assets/projects/yuki.jpg';
import ibaiImg from '../assets/projects/ibai.jpg';

// Importar videos demo directamente
import demoIbai from '../assets/demos/demo-ibai.mp4';

// Array con píldoras formativas ordenadas por fecha (más reciente primero)
const pildorasFormativasData = [
  {
    id: 'yuki',
    title: 'Seal-Game',
    description: 'Aplicación web desarrollada como proyecto personal para gestión de tareas y organización.',
    image: yukiImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    webUrl: 'https://seal-game-two.vercel.app/',
    demoUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/seal-game',
    category: 'personal',
    date: 'Oct 2025',
    features: ['Autenticación JWT', 'CRUD completo', 'Interfaz intuitiva', 'Base de datos NoSQL'],
    personal: true,
    color: '#a0bae6ff'
  },
  {
    id: 'ibai',
    title: 'Demo Ibai',
    description: 'Proyecto de demostración creado para postular a vacante, con efectos visuales y animaciones.',
    image: ibaiImg,
    technologies: ['JavaScript', 'CSS3', 'Animaciones', 'HTML5', 'Web Audio API'],
    webUrl: 'https://aday25.github.io/demo-ibai/',
    demoVideo: demoIbai,
    githubUrl: 'https://github.com/Aday25/demo-ibai',
    category: 'demostracion',
    date: 'Sep 2025',
    features: ['Efectos visuales', 'Animaciones CSS', 'Interacción musical', 'Diseño creativo'],
    personal: true,
    color: '#6d3157ff'
  },
  {
    id: 'pasteleria-polimorfica',
    title: 'Pastelería Polimórfica',
    description: 'Píldora formativa de Polimorfismo en TypeScript aplicado a una pastelería.',
    image: pasteleriaImg,
    technologies: ['TypeScript', 'OOP', 'Polimorfismo', 'Interfaces', 'Genéricos'],
    webUrl: 'https://pasteleria-polimorfica.vercel.app/',
    demoUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/pasteleria-polimorfica',
    category: 'typescript',
    date: 'Sep 2025',
    features: ['Polimorfismo', 'Interfaces TypeScript', 'Patrones OOP', 'Código tipado'],
    color: '#71a11fff'
  },
  {
    id: 'interactive-cv-mui',
    title: 'CV Material UI',
    description: 'CV interactivo realizado con React y Material UI con animaciones y estilo moderno.',
    image: materialImg,
    technologies: ['React', 'Material UI', 'JavaScript', 'CSS3', 'Animaciones'],
    webUrl: 'https://aday25.github.io/interactive-cv-mui/',
    demoUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/interactive-cv-mui',
    category: 'frontend',
    date: 'Sep 2025',
    features: ['Design System', 'Componentes reutilizables', 'Animaciones CSS', 'Responsive Design'],
    color: '#2196f3'
  },
  {
    id: 'metodos-http',
    title: 'Métodos HTTP',
    description: 'Guía completa sobre HTTP: URL, comunicación cliente-servidor, métodos y códigos de estado.',
    image: httpImg,
    technologies: ['HTTP', 'APIs', 'JavaScript', 'HTML5', 'CSS3'],
    webUrl: 'https://aday25.github.io/PildoraMetodosHTTP/',
    demoUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/PildoraMetodosHTTP',
    category: 'frontend',
    date: 'Ago 2025',
    features: ['Guía interactiva', 'Test de conocimientos', 'Ejemplos prácticos', 'Fundamentos web'],
    color: '#655cec'
  },
  {
    id: 'arquitecturas-css',
    title: 'Arquitecturas CSS',
    description: 'Píldora formativa sobre metodologías CSS: BEM, Suit y Atomic con ejemplos prácticos.',
    image: arquitecturasImg,
    technologies: ['CSS3', 'BEM', 'Suit CSS', 'Atomic Design', 'Metodologías'],
    webUrl: 'https://aday25.github.io/Arquitecturas-CSS/',
    demoUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/Arquitecturas-CSS',
    category: 'css',
    date: 'Jun 2025',
    features: ['BEM Methodology', 'Suit CSS', 'Atomic Design', 'Código escalable'],
    color: '#d62a89'
  }
];

export default function PildorasFormativas() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  // AHORA SÍ puedes usar t() aquí dentro del componente
  const pildorasFormativas = pildorasFormativasData.map(project => ({
    ...project,
    title: t(project.title),
    description: t(project.description),
    features: project.features.map(feature => t(feature)),
    technologies: project.technologies.map(tech => t(tech)),
  }));

  const handleOpenModal = (img) => {
    setModalImg(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImg('');
  };

  const handleOpenVideoModal = (video) => {
    setCurrentVideo(video);
    setOpenVideoModal(true);
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal(false);
    setCurrentVideo('');
  };

  // Funciones para manejar los clics en los botones
  const handleDemoClick = (project) => {
    if (project.demoVideo) {
      // Abrir modal de video
      handleOpenVideoModal(project.demoVideo);
    } else if (project.demoUrl.startsWith('/')) {
      // Navegación interna
      navigate(project.demoUrl);
    } else if (project.demoUrl.startsWith('http')) {
      // Enlace externo - abre en nueva pestaña
      window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleWebClick = (webUrl) => {
    if (webUrl.startsWith('http')) {
      window.open(webUrl, '_blank', 'noopener,noreferrer');
    } else if (webUrl.startsWith('/')) {
      navigate(webUrl);
    }
  };

  const handleGithubClick = (githubUrl) => {
    if (githubUrl.startsWith('http')) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Estilo IDÉNTICO al de BootcampProjects
  const cardStyle = {
    width: 350,
    height: 420,
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
    borderRadius: 3,
    p: 3,
    background: isDarkMode
      ? `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))`
      : `linear-gradient(135deg, ${alpha('#ed6c02', 0.08)}, ${alpha('#1976d2', 0.05)})`,
    backdropFilter: 'blur(10px)',
    position: 'relative',
    overflow: 'visible',
    '&:hover': {
      border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
      boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
      transform: 'translateY(-4px)',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header con botón volver */}
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          variant="contained"
          sx={{
            borderColor: isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            color: 'text.primary',
            '&:hover': {
              borderColor: isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)',
              backgroundColor: isDarkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
            }
          }}
        >
          {t('Volver')}
        </Button>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <AnimatedTitle>
            {t('Píldoras formativas y más')}
          </AnimatedTitle>
        </Box>
      </Box>

      {/* Grid para proyectos - 3 POR FILA */}
      <Grid container spacing={3} justifyContent="center">
        {pildorasFormativas.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card sx={cardStyle}>
                {/* Línea superior decorativa - IGUAL que en BootcampProjects */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: project.color,
                    borderRadius: '3px 3px 0 0'
                  }}
                />

                {/* Contenido reorganizado */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 2 }}>
                  {/* Fila superior: Avatar + Título y fecha en línea */}
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    {/* Avatar circular */}
                    <Avatar
                      src={project.image}
                      onClick={() => handleOpenModal(project.image)}
                      sx={{
                        width: 80,
                        height: 80,
                        border: `3px solid ${project.color}${isDarkMode ? '40' : '30'}`,
                        cursor: 'pointer',
                        flexShrink: 0,
                        '&:hover': {
                          border: `3px solid ${project.color}`,
                          transform: 'scale(1.05)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    />

                    {/* Título y fecha al lado del avatar */}
                    <Box sx={{ flexGrow: 0.6, minWidth: 0, pt: 1.5 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: project.color,
                          mb: 0.5,
                          lineHeight: 1.4,
                          fontSize: '1.4rem',
                          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontStyle: 'italic',
                          display: 'block',
                          fontSize: '0.8rem'
                        }}
                      >
                        {project.date} • {t(project.category)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Descripción debajo de la fila avatar+título+fecha */}
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: '0.9rem',
                      textAlign: 'left'
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Tecnologías - CHIPS CON FONDO SÓLIDO */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    {t('TECNOLOGÍAS:')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="filled"
                        sx={{
                          mb: 0.5,
                          fontSize: '0.7rem',
                          height: '24px',
                          backgroundColor: project.color,
                          color: '#fff',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: alpha(project.color, 0.8),
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Características - CHIPS CON FONDO SÓLIDO */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
                    {t('CARACTERÍSTICAS:')}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <Chip
                        key={i}
                        label={feature}
                        size="small"
                        variant="filled"
                        sx={{
                          fontSize: '0.7rem',
                          height: '24px',
                          backgroundColor: project.color,
                          color: '#fff',
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: alpha(project.color, 0.8),
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                {/* Botones de acción - CON FUNCIONES DE CLICK */}
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleWebClick(project.webUrl)}
                    startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      flex: 1,
                      bgcolor: project.color,
                      fontSize: '0.75rem',
                      py: 0.75,
                      fontWeight: '600',
                      '&:hover': {
                        bgcolor: alpha(project.color, 0.8),
                      }
                    }}
                  >
                    {t('Web')}
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleDemoClick(project)}
                    startIcon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      flex: 1,
                      bgcolor: project.color,
                      fontSize: '0.75rem',
                      py: 0.75,
                      fontWeight: '600',
                      '&:hover': {
                        bgcolor: alpha(project.color, 0.8),
                      }
                    }}
                  >
                    {t('Demo')}
                  </Button>

                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleGithubClick(project.githubUrl)}
                    startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      flex: 1,
                      bgcolor: isDarkMode ? '#333' : '#666',
                      color: '#fff',
                      fontSize: '0.75rem',
                      py: 0.75,
                      fontWeight: '600',
                      '&:hover': {
                        bgcolor: isDarkMode ? '#555' : '#888',
                      }
                    }}
                  >
                    {t('Código')}
                  </Button>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Sección informativa */}
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom color="primary">
          {t('💡 Sobre las Píldoras Formativas')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {t('Estas píldoras representan ejercicios prácticos de aprendizaje donde he profundizado en tecnologías específicas, desde fundamentos web hasta conceptos avanzados de desarrollo.')}
        </Typography>
      </Container>

      {/* Modal para imagen ampliada */}
      <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
            outline: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'black', zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={modalImg}
            alt={t('Vista previa del proyecto')}
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: 8,
              display: 'block',
            }}
          />
        </Box>
      </Modal>

      {/* Modal para videos demo */}
      <Modal open={openVideoModal} onClose={handleCloseVideoModal} closeAfterTransition>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', sm: '80vw', md: '70vw' },
            maxWidth: '900px',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleCloseVideoModal}
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8, 
              color: 'white', 
              zIndex: 10,
              bgcolor: 'rgba(0,0,0,0.5)',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.7)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
            {t('Demo del Proyecto')}
          </Typography>
          
          <Box
            component="video"
            src={currentVideo}
            controls
            autoPlay
            muted
            sx={{
              width: '100%',
              maxHeight: '70vh',
              borderRadius: 1,
              outline: 'none',
            }}
          />
        </Box>
      </Modal>

      <ActionButtons
        prevPage="/bootcamp"
        prevLabel="Bootcamp"
        nextPage="/skills"
        nextLabel="Habilidades"
      />
    </Container>
  );
}