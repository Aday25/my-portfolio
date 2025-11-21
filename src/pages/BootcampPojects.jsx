import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Modal, IconButton, Chip, Button, Avatar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import GroupIcon from '@mui/icons-material/Group';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const bootcampProjects = [
  {
    id: 'sprintflow',
    title: 'SprintFlow',
    description: 'Sistema de gestión ágil para equipos de desarrollo con métricas en tiempo real.',
    image: sprintflowImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Material UI', 'JWT'],
    demoUrl: '',
    webUrl: 'https://sprint-flow-client-kqk8.vercel.app/',
    githubUrl: 'https://github.com/SprintFlow',
    category: 'fullstack',
    date: 'Nov 2025',
    features: ['Autenticación JWT', 'Gestión de proyectos', 'Métricas en tiempo real'],
    teamProject: true,
    featured: true,
    color: '#6ba186ff'
  },
  {
    id: 'el-gran-azul',
    title: 'El Gran Azul',
    description: 'Aplicación web sobre conservación marina desarrollada con TypeScript y Material UI.',
    image: elGranAzulImg,
    technologies: ['TypeScript', 'React', 'Material UI', 'APIs'],
    demoUrl: '',
    webUrl: 'https://el-gran-azul.vercel.app/',
    githubUrl: 'https://github.com/Grupo5-Biologia-Marina',
    category: 'fullstack',
    date: 'Oct 2025',
    features: ['TypeScript', 'Material UI', 'Consumo de APIs'],
    teamProject: true,
    featured: true,
    color: '#1594a5ff'
  },
  {
    id: 'noctiluca',
    title: 'Noctiluca Backend',
    description: 'API RESTful para posts de mariposas con MySQL/MongoDB. Fui Scrum Master y Developer.',
    image: noctilucaImg,
    technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'Sequelize'],
    demoUrl: 'https://api-noctiluca.vercel.app/',
    webUrl: 'https://noctiluca-app.vercel.app/',
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
    demoUrl: '',
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
    description: 'Solución digital para gestión médica desarrollada durante hackathon. **Proyecto finalista**.',
    image: sanimedImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Team Work'],
    demoUrl: 'https://sanimed-demo.vercel.app/',
    githubUrl: 'https://github.com/Aday25/sanimed',
    category: 'hackathon',
    date: 'Jul 2025',
    features: ['Desarrollo ágil', 'Trabajo en equipo', 'Solución innovadora'],
    teamProject: true,
    featured: true,
    color: '#64a06aff'
  },
  {
    id: 'chompy-the-game',
    title: 'Chompy The Game',
    description: 'Juego educativo para aprender programación orientada a objetos con Canvas.',
    image: chompyImg,
    technologies: ['JavaScript', 'OOP', 'Canvas', 'Game Development'],
    demoUrl: 'https://aday25.github.io/chompy-the-game/',
    githubUrl: 'https://github.com/Aday25/chompy-the-game',
    category: 'javascript',
    date: 'Jul 2025',
    features: ['Programación OOP', 'Gameplay educativo', 'Animaciones Canvas'],
    teamProject: false,
    featured: true,
    color: '#bd1818ff'
  },
  {
    id: 'nectara',
    title: 'Nectara',
    description: 'Proyecto full-stack para gestión de contenidos y recursos digitales.',
    image: nectaraImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: 'https://nectara-demo.vercel.app/',
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
    demoUrl: 'https://aday25.github.io/outdoor-cinema-crud/',
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
    demoUrl: 'https://aday25.github.io/book-app-vanilla/',
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
    description: 'Web educativa sobre las propiedades del nitrógeno. Desarrollé la sección "Historia"',
    image: nitrogenoImg,
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Team Work'],
    demoUrl: 'https://aday25.github.io/nitrogeno/',
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
    demoUrl: 'https://aday25.github.io/Piedras-angulares/',
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
  const navigate = useNavigate();

  const handleOpenModal = (img) => {
    setModalImg(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setModalImg('');
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header con botón volver */}
      <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/projects')}
          variant="outlined"
          sx={{ mb: 2 }}
        >
          Volver
        </Button>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            Proyectos Bootcamp
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Del código básico a aplicaciones full-stack
          </Typography>
        </Box>
      </Box>

      {/* Grid para proyectos - 3 POR FILA */}
      <Grid container spacing={3}>
        {bootcampProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  width: 350,
                  height: 400,
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${project.color}20`,
                  borderRadius: 3,
                  p: 5,
                  background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
                  position: 'relative',
                  overflow: 'visible',
                  '&:hover': {
                    boxShadow: `0 8px 32px ${project.color}20`,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.3s ease'
                  }
                }}
              >
                {/* Badges */}
                <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 2, display: 'flex', flexDirection: 'arrow', gap: 0.5 }}>
                  {project.featured && (
                    <Chip
                      label="⭐ Destacado"
                      size="small"
                      sx={{
                        bgcolor: project.color,
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.65rem',
                        height: 20
                      }}
                    />
                  )}
                  {project.teamProject && (
                    <Chip
                      icon={<GroupIcon sx={{ fontSize: 12 }} />}
                      label="Equipo"
                      size="small"
                      sx={{
                        bgcolor: 'primary.main',
                        color: 'white',
                        fontSize: '0.65rem',
                        height: 20
                      }}
                    />
                  )}
                </Box>

                {/* Contenido reorganizado */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 2 }}>
                  {/* Fila superior: Avatar + Título y fecha en línea */}
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    {/* Avatar circular */}
                    <Avatar
                      src={project.image}
                      onClick={() => handleOpenModal(project.image)}
                      sx={{
                        width: 80,
                        height: 80,
                        border: `3px solid ${project.color}30`,
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
                    <Box sx={{ flexGrow: 1, minWidth: 0, pt: 0.5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: project.color,
                          mb: 0.5,
                          lineHeight: 1.2,
                          fontSize: '1.1rem'
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          fontStyle: 'italic',
                          display: 'block'
                        }}
                      >
                        {project.date} • {project.category}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Descripción debajo de la fila avatar+título+fecha */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.4,
                      fontSize: '0.85rem',
                      textAlign: 'left'
                    }}
                  >
                    {project.description.includes('**') ? (
                      <>
                        {project.description.split('**')[0]}
                        <strong style={{ color: project.color }}>{project.description.split('**')[1]}</strong>
                        {project.description.split('**')[2]}
                      </>
                    ) : (
                      project.description
                    )}
                  </Typography>
                </Box>
                {/* Tecnologías */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          fontSize: '0.65rem',
                          height: 20,
                          bgcolor: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}30`
                        }}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>

                {/* Características */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.features.slice(0, 3).map((feature, i) => (
                      <Box
                        key={i}
                        sx={{
                          px: 1,
                          py: 0.25,
                          borderRadius: 1,
                          bgcolor: `${project.color}10`,
                          border: `1px solid ${project.color}20`,
                          fontSize: '0.6rem',
                          fontWeight: '500',
                          color: project.color
                        }}
                      >
                        {feature}
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Rol en equipo */}
                {project.teamProject && project.teamMembers && (
                  <Box sx={{ mb: 1 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 'bold', display: 'block', mb: 0.5 }}>
                      Equipo ({project.teamMembers.length} personas)
                    </Typography>
                  </Box>
                )}

                {/* Botones de acción */}
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                  {project.webUrl && (
                    <Button
                      variant="contained"
                      size="small"
                      href={project.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        flex: 1,
                        bgcolor: project.color,
                        fontSize: '0.7rem',
                        py: 0.5,
                        '&:hover': {
                          bgcolor: project.color,
                          opacity: 0.9
                        }
                      }}
                    >
                      Web
                    </Button>
                  )}

                  {project.demoUrl && (
                    <Button
                      variant="outlined"
                      size="small"
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        flex: 1,
                        borderColor: project.color,
                        color: project.color,
                        fontSize: '0.7rem',
                        py: 0.5
                      }}
                    >
                      Demo
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    size="small"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<GitHubIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      flex: 1,
                      borderColor: '#333',
                      color: '#333',
                      fontSize: '0.7rem',
                      py: 0.5
                    }}
                  >
                    Código
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
            alt="Vista previa del proyecto"
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: 8,
              display: 'block',
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
}