import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Modal, IconButton, Chip, Button, Avatar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Importar imágenes de las píldoras
import arquitecturasImg from '../assets/projects/arquitecturas.jpg';
import httpImg from '../assets/projects/http.jpg';
import materialImg from '../assets/projects/material.jpg';
import pasteleriaImg from '../assets/projects/pasteleria.jpg';
import yukiImg from '../assets/projects/yuki.jpg';
import ibaiImg from '../assets/projects/ibai.jpg';

// Array con píldoras formativas ordenadas por fecha (más reciente primero)
const pildorasFormativas = [
  {
    id: 'yuki',
    title: 'Yuki',
    description: 'Aplicación web desarrollada como proyecto personal para gestión de tareas y organización.',
    image: yukiImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    webUrl: 'https://yuki-app-demo.vercel.app/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/yuki',
    category: 'personal',
    date: 'Oct 2025',
    features: ['Autenticación JWT', 'CRUD completo', 'Interfaz intuitiva', 'Base de datos NoSQL'],
    level: 'avanzado',
    personal: true,
    color: '#3e27b0ff'
  },
  {
    id: 'ibai',
    title: 'Demo Ibai',
    description: 'Proyecto de demostración creado para postular a vacante, con efectos visuales y animaciones.',
    image: ibaiImg,
    technologies: ['JavaScript', 'CSS3', 'Animaciones', 'HTML5', 'Web Audio API'],
    webUrl: 'https://aday25.github.io/demo-ibai/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/demo-ibai',
    category: 'demostracion',
    date: 'Sep 2025',
    features: ['Efectos visuales', 'Animaciones CSS', 'Interacción musical', 'Diseño creativo'],
    level: 'intermedio',
    personal: true,
    color: '#9500ffff'
  },
  {
    id: 'pasteleria-polimorfica',
    title: 'Pastelería Polimórfica',
    description: 'Píldora formativa de Polimorfismo en TypeScript aplicado a una pastelería.',
    image: pasteleriaImg,
    technologies: ['TypeScript', 'OOP', 'Polimorfismo', 'Interfaces', 'Genéricos'],
    webUrl: 'https://aday25.github.io/pasteleria-polimorfica/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/pasteleria-polimorfica',
    category: 'typescript',
    date: 'Sep 2025',
    features: ['Polimorfismo', 'Interfaces TypeScript', 'Patrones OOP', 'Código tipado'],
    level: 'avanzado',
    color: '#65b440ff'
  },
  {
    id: 'interactive-cv-mui',
    title: 'CV Material UI',
    description: 'CV interactivo realizado con React y Material UI con animaciones y estilo moderno.',
    image: materialImg,
    technologies: ['React', 'Material UI', 'JavaScript', 'CSS3', 'Animaciones'],
    webUrl: 'https://aday25.github.io/interactive-cv-mui/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/interactive-cv-mui',
    category: 'frontend',
    date: 'Sep 2025',
    features: ['Design System', 'Componentes reutilizables', 'Animaciones CSS', 'Responsive Design'],
    level: 'avanzado',
    color: '#2196f3'
  },
  {
    id: 'metodos-http',
    title: 'Métodos HTTP',
    description: 'Guía completa sobre HTTP: URL, comunicación cliente-servidor, métodos y códigos de estado.',
    image: httpImg,
    technologies: ['HTTP', 'APIs', 'JavaScript', 'HTML5', 'CSS3'],
    webUrl: 'https://aday25.github.io/PildoraMetodosHTTP/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/PildoraMetodosHTTP',
    category: 'fundamentos',
    date: 'Ago 2025',
    features: ['Guía interactiva', 'Test de conocimientos', 'Ejemplos prácticos', 'Fundamentos web'],
    level: 'intermedio',
    color: '#655cecff'
  },
  {
    id: 'arquitecturas-css',
    title: 'Arquitecturas CSS',
    description: 'Píldora formativa sobre metodologías CSS: BEM, Suit y Atomic con ejemplos prácticos.',
    image: arquitecturasImg,
    technologies: ['CSS3', 'BEM', 'Suit CSS', 'Atomic Design', 'Metodologías'],
    webUrl: 'https://aday25.github.io/Arquitecturas-CSS/',
    demoUrl: '',
    githubUrl: 'https://github.com/Aday25/Arquitecturas-CSS',
    category: 'css',
    date: 'Jun 2025',
    features: ['BEM Methodology', 'Suit CSS', 'Atomic Design', 'Código escalable'],
    level: 'Básico',
    color: '#d62a89ff'
  }
];

export default function PildorasFormativas() {
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

  // Función para determinar el color del nivel
  const getLevelColor = (level) => {
    switch(level) {
      case 'Básico': return 'success';
      case 'intermedio': return 'warning';
      case 'avanzado': return 'error';
      default: return 'primary';
    }
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
            Píldoras Formativas & Personales
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Ejercicios de aprendizaje y proyectos personales
          </Typography>
        </Box>
      </Box>

      {/* Grid para proyectos - 3 POR FILA */}
      <Grid container spacing={3}>
        {pildorasFormativas.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  width: 350,
                  height: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${project.color}20`,
                  borderRadius: 3,
                  p: 3,
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
                <Box sx={{ position: 'absolute', top: 10, right: 10, zIndex: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  {/* Badge personal */}
                  {project.personal && (
                    <Chip
                      label="Personal"
                      size="small"
                      sx={{
                        bgcolor: '#9c27b0',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '0.65rem',
                        height: 20
                      }}
                    />
                  )}
                  {/* Badge nivel */}
                  <Chip
                    label={project.level}
                    size="small"
                    color={getLevelColor(project.level)}
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '0.65rem',
                      height: 20
                    }}
                  />
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
                    {project.description}
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

                {/* Botones de acción - SIEMPRE 3 BOTONES */}
                <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
                  {/* Botón Web - SIEMPRE PRESENTE */}
                  <Button
                    variant={project.webUrl ? "contained" : "outlined"}
                    size="small"
                    href={project.webUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                    disabled={!project.webUrl}
                    sx={{
                      flex: 1,
                      bgcolor: project.webUrl ? project.color : 'transparent',
                      borderColor: project.color,
                      color: project.webUrl ? 'white' : project.color,
                      fontSize: '0.7rem',
                      py: 0.5,
                      '&:hover': project.webUrl ? {
                        bgcolor: project.color,
                        opacity: 0.9
                      } : {}
                    }}
                  >
                    Web
                  </Button>
                  
                  {/* Botón Demo - SIEMPRE PRESENTE */}
                  <Button
                    variant={project.demoUrl ? "outlined" : "outlined"}
                    size="small"
                    href={project.demoUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
                    disabled={!project.demoUrl}
                    sx={{
                      flex: 1,
                      borderColor: project.demoUrl ? project.color : '#ccc',
                      color: project.demoUrl ? project.color : '#ccc',
                      fontSize: '0.7rem',
                      py: 0.5
                    }}
                  >
                    Demo
                  </Button>
                  
                  {/* Botón Código - SIEMPRE PRESENTE */}
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

      {/* Sección informativa */}
      <Container maxWidth="md" sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom color="primary">
          💡 Sobre las Píldoras Formativas
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Estas píldoras representan ejercicios prácticos de aprendizaje donde he profundizado en tecnologías específicas, 
          desde fundamentos web hasta conceptos avanzados de desarrollo.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mt: 3 }}>
          <Chip label="🟢 Básico" variant="outlined" color="success" />
          <Chip label="🟡 Intermedio" variant="outlined" color="warning" />
          <Chip label="🔴 Avanzado" variant="outlined" color="error" />
          <Chip label="🟣 Personal" variant="outlined" color="secondary" />
        </Box>
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