import React, { useState } from 'react';
import { Box, Typography, Card, Grid, Modal, IconButton, Chip, Button, Avatar, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

import arquitecturasImg from '../assets/projects/arquitecturas.jpg';
import httpImg from '../assets/projects/http.jpg';
import materialImg from '../assets/projects/material.jpg';
import pasteleriaImg from '../assets/projects/pasteleria.jpg';
import yukiImg from '../assets/projects/yuki.jpg';
import ibaiImg from '../assets/projects/ibai.jpg';

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
    demoUrl: 'https://www.canva.com/design/DAG6LBeDOxI/uoqZ2og81bUs-SmxxChiAQ/view?utm_content=DAG6LBeDOxI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd62b13c003',
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
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

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

  // Función para pausar la música
  const pauseMusic = () => {
    if (window.audioPlayer && window.audioPlayer.getState) {
      const audioState = window.audioPlayer.getState();
      if (audioState.playing) {
        console.log('🎵 Pausando música para abrir demo externo');
        window.audioPlayer.pause();
      }
    }
  };

  // Funciones para manejar los clics en los botones
  const handleDemoClick = (project) => {
    // Pausar música antes de abrir el enlace
    pauseMusic();
    
    if (project.demoUrl.startsWith('/')) {
      navigate(project.demoUrl);
    } else if (project.demoUrl.startsWith('http')) {
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

  return (
    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
      {/* Header SIN botón volver */}
      <Box sx={{
        mb: 4,
        textAlign: 'center'
      }}>
        <AnimatedTitle>
          {t('Píldoras formativas y más')}
        </AnimatedTitle>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mt: 2,
            fontSize: { xs: '1rem', sm: '1.1rem' }
          }}
        >
          {t('Ejercicios prácticos y proyectos de aprendizaje')}
        </Typography>
      </Box>

      {/* Grid para proyectos - RESPONSIVE */}
      <Grid container spacing={3} justifyContent="center">
        {pildorasFormativas.map((project, index) => (
          <Grid item xs={12} sm={6} lg={4} xl={3} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card sx={{
                width: '100%',
                maxWidth: { xs: '100%', sm: 350 },
                height: { xs: 'auto', sm: 420 },
                minHeight: { xs: 500, sm: 420 },
                display: 'flex',
                flexDirection: 'column',
                border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                borderRadius: 3,
                p: { xs: 2, sm: 3 },
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
              }}>
                {/* Línea superior decorativa */}
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

                {/* Badges - RESPONSIVE */}
                <Box sx={{
                  position: 'absolute',
                  top: 12,
                  right: 10,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 0.5
                }}>
                  {project.personal && (
                    <Chip
                      label={t('⭐ Personal')}
                      size="small"
                      sx={{
                        bgcolor: project.color,
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: { xs: '0.65rem', sm: '0.7rem' },
                        height: 22,
                        '&:hover': {
                          backgroundColor: alpha(project.color, 0.8),
                        }
                      }}
                    />
                  )}
                </Box>

                {/* Contenido reorganizado - RESPONSIVE */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mb: 2,
                  flex: 1
                }}>
                  {/* Fila superior: Avatar + Título y fecha */}
                  <Box sx={{
                    display: 'flex',
                    gap: 2,
                    alignItems: 'flex-start',
                    flexDirection: { xs: 'column', sm: 'row' }
                  }}>
                    {/* Avatar circular */}
                    <Avatar
                      src={project.image}
                      onClick={() => handleOpenModal(project.image)}
                      sx={{
                        width: { xs: 70, sm: 80 },
                        height: { xs: 70, sm: 80 },
                        border: `3px solid ${project.color}${isDarkMode ? '40' : '30'}`,
                        cursor: 'pointer',
                        flexShrink: 0,
                        alignSelf: { xs: 'center', sm: 'flex-start' },
                        '&:hover': {
                          border: `3px solid ${project.color}`,
                          transform: 'scale(1.05)',
                          transition: 'all 0.3s ease'
                        }
                      }}
                    />

                    {/* Título y fecha */}
                    <Box sx={{
                      flexGrow: 1,
                      minWidth: 0,
                      pt: { xs: 0, sm: 1.5 },
                      textAlign: { xs: 'center', sm: 'left' }
                    }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: project.color,
                          mb: 0.5,
                          lineHeight: 1.4,
                          fontSize: { xs: '1.3rem', sm: '1.4rem' },
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
                          fontSize: { xs: '0.75rem', sm: '0.8rem' }
                        }}
                      >
                        {project.date} • {t(project.category)}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Descripción */}
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      lineHeight: 1.5,
                      fontSize: { xs: '0.85rem', sm: '1rem' },
                      textAlign: { xs: 'center', sm: 'left' },
                      flex: 1,
                      mb: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>

                {/* Tecnologías - RESPONSIVE */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{
                    fontWeight: 'bold',
                    display: 'block',
                    mb: 1,
                    fontSize: { xs: '0.75rem', sm: '0.8rem' }
                  }}>
                    {t('TECNOLOGÍAS:')}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        variant="filled"
                        sx={{
                          mb: 0.5,
                          fontSize: { xs: '0.65rem', sm: '0.7rem' },
                          height: { xs: '22px', sm: '24px' },
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

                {/* Características - RESPONSIVE */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{
                    fontWeight: 'bold',
                    display: 'block',
                    mb: 1,
                    fontSize: { xs: '0.75rem', sm: '0.8rem' }
                  }}>
                    {t('CARACTERÍSTICAS:')}
                  </Typography>
                  <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 0.5,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <Chip
                        key={i}
                        label={feature}
                        size="small"
                        variant="filled"
                        sx={{
                          fontSize: { xs: '0.65rem', sm: '0.7rem' },
                          height: { xs: '22px', sm: '24px' },
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

                {/* Botones de acción - RESPONSIVE */}
                <Box sx={{
                  display: 'flex',
                  gap: 1,
                  mt: 'auto',
                  flexDirection: { xs: 'column', sm: 'row' }
                }}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleWebClick(project.webUrl)}
                    startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      flex: 1,
                      bgcolor: project.color,
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      py: { xs: 1, sm: 0.75 },
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
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      py: { xs: 1, sm: 0.75 },
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
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      py: { xs: 1, sm: 0.75 },
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
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center', px: { xs: 2, sm: 3 } }}>
        <Typography variant="h6" gutterBottom color="primary" sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
          {t('💡 Sobre las Píldoras Formativas')}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{
          mb: 2,
          fontSize: { xs: '0.85rem', sm: '1rem' },
          lineHeight: 1.6
        }}>
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

      <ActionButtons
        prevPage="/bootcamp"
        prevLabel="Bootcamp"
        nextPage="/skills"
        nextLabel="Habilidades"
      />
    </Container>
  );
}