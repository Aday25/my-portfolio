import React, { useState } from 'react';
import { Box, Typography, Card, Grid, Modal, IconButton, Chip, Button, Avatar, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

// Importar imágenes de los proyectos
import piedrasAngularesImg from '../assets/projects/piedras-angulares.jpg';
import nitrogenoImg from '../assets/projects/nitrogeno.jpg';
import bookAppImg from '../assets/projects/book-api.jpg';
import outdoorCinemaImg from '../assets/projects/outdoor-cinema.jpg';
import nectaraImg from '../assets/projects/nectara.jpg';
import tarotImg from '../assets/projects/tarot.jpg';
import chompyImg from '../assets/projects/chompy.jpg';
import sanimedImg from '../assets/projects/sanimed.jpg';
import elGranAzulImg from '../assets/projects/el-gran-azul.jpg';
import sprintflowImg from '../assets/projects/sprintflow.jpg';
import noctilucaImg from '../assets/projects/noctiluca.jpg';

// Importar videos demo directamente
import demoSprintflow from '../assets/demos/demo-sprintflow.mp4';
import demoChompy from '../assets/demos/demo-chompy.mp4';
import demoNectara from '../assets/demos/demo-nectara.mp4';
import demoCinema from '../assets/demos/demo-cinema.mp4';
import demoTarot from '../assets/demos/demo-tarot.mp4';
import demoBooks from '../assets/demos/demo-books.mp4';
import demoNitrogeno from '../assets/demos/demo-nitrogeno.mp4';
import demoPiedras from '../assets/demos/demo-piedras.mp4';

// Array con proyectos del bootcamp
const bootcampProjectsData = [
  {
    id: 'sprintflow',
    title: 'SprintFlow',
    description: 'Sistema de gestión ágil para equipos de desarrollo con métricas en tiempo real.',
    image: sprintflowImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Material UI', 'JWT'],
    demoVideo: demoSprintflow,
    webUrl: 'https://sprint-flow-client-kqk8.vercel.app/',
    githubUrl: 'https://github.com/SprintFlow',
    category: 'fullstack',
    date: 'Nov 2025',
    features: ['Autenticación JWT', 'Gestión de proyectos', 'Métricas en tiempo real'],
    teamProject: true,
    featured: true,
    color: '#6ba186'
  },
  {
    id: 'el-gran-azul',
    title: 'El Gran Azul',
    description: 'Aplicación web sobre la biología marina desarrollada con TypeScript y Material UI.',
    image: elGranAzulImg,
    technologies: ['TypeScript', 'React', 'Material UI', 'APIs'],
    demoUrl: '/not-found',
    webUrl: 'https://el-gran-azul.vercel.app/',
    githubUrl: 'https://github.com/Grupo5-Biologia-Marina',
    category: 'fullstack',
    date: 'Oct 2025',
    features: ['TypeScript', 'Material UI', 'Consumo de APIs'],
    teamProject: true,
    featured: true,
    color: '#1594a5'
  },
  {
    id: 'noctiluca',
    title: 'Noctiluca Backend',
    description: 'API RESTful para posts de mariposas con MySQL/MongoDB. Fui Scrum Master y Developer.',
    image: noctilucaImg,
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Sequelize'],
    demoUrl: '/not-found',
    webUrl: '/not-found',
    githubUrl: 'https://github.com/API-Noctiluca',
    category: 'backend',
    date: 'Sep 2025',
    features: ['Doble base de datos', 'Autenticación JWT', 'Cloudinary'],
    teamProject: true,
    teamMembers: ['Aday Álvarez', 'Nicole Guglielmucci', 'Marian Yarj', 'Guissella Pérez', 'Julia Zamorano'],
    color: '#9c27b0'
  },
  {
    id: 'tarot',
    title: 'Tarot Científico',
    description: 'Aplicación React que combina cartas de tarot con científicas históricas.',
    image: tarotImg,
    technologies: ['React', 'JavaScript', 'CSS3', 'Hooks'],
    webUrl: 'https://tarot-react.vercel.app/',
    demoVideo: demoTarot,
    githubUrl: 'https://github.com/Aday25/tarot-react',
    category: 'react',
    date: 'Ago 2025',
    features: ['Componentes React', 'Estado con Hooks', 'Diseño responsive'],
    teamProject: false,
    featured: true,
    color: '#ff4081'
  },
  {
    id: 'sanimed',
    title: 'Sanimed Hackathon',
    description: 'Solución digital para gestión médica desarrollada durante hackathon. Proyecto finalista.',
    image: sanimedImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Team Work'],
    demoUrl: '/not-found',
    webUrl: '/not-found',
    githubUrl: 'https://github.com/Aday25/sanimed',
    category: 'hackathon',
    date: 'Jul 2025',
    features: ['Desarrollo ágil', 'Trabajo en equipo', 'Innovación'],
    teamProject: true,
    featured: true,
    color: '#64a06a'
  },
  {
    id: 'chompy-the-game',
    title: 'Chompy The Game',
    description: 'Juego educativo para aprender programación orientada a objetos con Canvas.',
    image: chompyImg,
    technologies: ['JavaScript', 'OOP', 'Canvas', 'Game Development'],
    demoVideo: demoChompy,
    webUrl: 'https://aday25.github.io/chompy-the-game/',
    githubUrl: 'https://github.com/Aday25/chompy-the-game',
    category: 'javascript',
    date: 'Jul 2025',
    features: ['Programación OOP', 'VideoGame', 'Animaciones'],
    teamProject: false,
    featured: true,
    color: '#bd1818'
  },
  {
    id: 'nectara',
    title: 'Nectara',
    description: 'Proyecto full-stack para gestión de contenidos y recursos digitales.',
    image: nectaraImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoVideo: demoNectara,
    webUrl: 'https://front-nectara-t9br.vercel.app/',
    githubUrl: 'https://github.com/Aday25/nectara',
    category: 'fullstack',
    date: 'Jul 2025',
    features: ['Stack MERN', 'Autenticación JWT', 'API REST'],
    teamProject: true,
    color: '#ff9800'
  },
  {
    id: 'outdoor-cinema-crud',
    title: 'Outdoor Cinema CRUD',
    description: 'Sistema de gestión para cine al aire libre con operaciones CRUD completas.',
    image: outdoorCinemaImg,
    technologies: ['JavaScript', 'CRUD', 'Bootstrap', 'API Fetch'],
    demoVideo: demoCinema,
    webUrl: 'https://aday25.github.io/outdoor-cinema-crud/',
    githubUrl: 'https://github.com/Aday25/outdoor-cinema-crud',
    category: 'javascript',
    date: 'Jul 2025',
    features: ['Operaciones CRUD', 'Interfaz Bootstrap', 'Gestión de estado'],
    teamProject: false,
    color: '#795548'
  },
  {
    id: 'book-app-vanilla',
    title: 'Book App Vanilla',
    description: 'Aplicación de gestión de libros desarrollada con JavaScript vanilla.',
    image: bookAppImg,
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
    demoVideo: demoBooks,
    webUrl: 'https://aday25.github.io/book-app-vanilla/',
    githubUrl: 'https://github.com/Aday25/book-app-vanilla',
    category: 'javascript',
    date: 'Jul 2025',
    features: ['CRUD completo', 'Local Storage', 'Interfaz intuitiva'],
    teamProject: false,
    color: '#607d8b'
  },
  {
    id: 'nitrogeno',
    title: 'Nitrógeno',
    description: 'Web educativa sobre las propiedades del nitrógeno. Desarrollé la sección Historia.',
    image: nitrogenoImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Team Work'],
    demoVideo: 'https://aday25.github.io/nitrogeno/',
    webUrl: demoNitrogeno,
    githubUrl: 'https://github.com/Aday25/nitrogeno',
    category: 'fundamentos',
    date: 'Jun 2025',
    features: ['7 secciones temáticas', 'Trabajo colaborativo', 'Diseño responsivo'],
    teamProject: true,
    teamMembers: ['Guissella Pérez', 'Aday Álvarez', 'Rocío Coronel', 'Ana Muruzabal', 'Larysa Ambartsumian', 'Paloma Gómez'],
    color: '#009688'
  },
  {
    id: 'piedras-angulares',
    title: 'Piedras Angulares',
    description: 'Web homenaje a mujeres pioneras en la ciencia oceánica.',
    image: piedrasAngularesImg,
    technologies: ['HTML5', 'CSS3', 'Grid', 'Flexbox', 'Responsive Design'],
    demoVideo: demoPiedras,
    webUrl: 'https://aday25.github.io/Piedras-angulares/',
    githubUrl: 'https://github.com/Aday25/Piedras-angulares',
    category: 'fundamentos',
    date: 'Jun 2025',
    features: ['Diseño responsivo', 'Efectos 3D CSS', 'Navegación semántica'],
    teamProject: false,
    color: '#3f51b5'
  }
];

export default function BootcampProjects() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [openVideoModal, setOpenVideoModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  const bootcampProjects = bootcampProjectsData.map(project => ({
    ...project,
    title: t(project.title),
    description: t(project.description),
    features: project.features.map(feature => t(feature)),
    technologies: project.technologies.map(tech => t(tech)),
    category: t(project.category)
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
    console.log('🎵 Estado actual del audio:', window.audioPlayer?.getState?.());

    // Pausar la música si está reproduciéndose
    if (window.audioPlayer && window.audioPlayer.getState) {
      const audioState = window.audioPlayer.getState();
      console.log('🎵 Estado del audio:', audioState);

      if (audioState.playing) { // ← Ahora usa 'playing' en lugar de 'isPlaying'
        console.log('🎵 Pausando música para reproducir demo');
        window.audioPlayer.pause();
      }
    }

    setCurrentVideo(video);
    setOpenVideoModal(true);
  };

  const handleCloseVideoModal = () => {
    setOpenVideoModal(false);
    setCurrentVideo('');

    // Reanudar la música si estaba reproduciéndose antes
    if (window.audioPlayer && window.audioPlayer.getState) {
      const audioState = window.audioPlayer.getState();
      if (!audioState.playing) { // ← Ahora usa 'playing'
        console.log('🎵 Reanudando música después del demo');
        setTimeout(() => {
          window.audioPlayer.play();
        }, 300);
      }
    }
  };

  // Funciones para manejar los clics en los botones
  const handleDemoClick = (project) => {
    if (project.demoVideo) {
      handleOpenVideoModal(project.demoVideo);
    } else if (project.demoUrl.startsWith('/')) {
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
          {t('Proyectos Bootcamp')}
        </AnimatedTitle>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{
            mt: 2,
            fontSize: { xs: '1rem', sm: '1.1rem' }
          }}
        >
          {t('Del código básico a aplicaciones full-stack')}
        </Typography>
      </Box>

      {/* Grid para proyectos - RESPONSIVE */}
      <Grid container spacing={3} justifyContent="center">
        {bootcampProjects.map((project, index) => (
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

                {/* Badges - EN LÍNEA HORIZONTAL EN DESKTOP */}
                <Box sx={{
                  position: 'absolute',
                  top: 12,
                  right: 10,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 0.5
                }}>
                  {project.featured && (
                    <Chip
                      label={t('⭐ Destacado')}
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
                  {project.teamProject && (
                    <Chip
                      icon={<GroupIcon sx={{ fontSize: 14 }} />}
                      label={t('Equipo')}
                      size="small"
                      sx={{
                        bgcolor: isDarkMode ? 'primary.dark' : 'primary.main',
                        color: 'white',
                        fontSize: { xs: '0.65rem', sm: '0.7rem' },
                        height: 22
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
                        {project.date} • {project.category}
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
                    {project.description.includes('**') ? (
                      <>
                        {project.description.split('**')[0]}
                        <strong style={{ color: project.color }}>
                          {project.description.split('**')[1]}
                        </strong>
                        {project.description.split('**')[2]}
                      </>
                    ) : (
                      project.description
                    )}
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
            width: { xs: '95vw', sm: '80vw', md: '70vw' },
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
        prevPage="/projects"
        prevLabel="Mis Proyectos"
        nextPage="/personal"
        nextLabel="Personales"
      />
    </Container>
  );
}