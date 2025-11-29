import { Box, Typography, Grid, Card, Avatar, Container, Chip, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import bootcampCover from '../assets/projects/bootcamp-cover.jpg';
import personalesCover from '../assets/projects/personales-cover.jpg';
import bootcampGirl from '../assets/projects/bootcamp-girl.png';
import personalGirl from '../assets/projects/personal-girl.png';
import ActionButtons from '../components/ActionButtons';

const categories = [
  {
    id: 'bootcamp',
    title: 'Bootcamp',
    subtitle: 'Full Stack & DevOps',
    description: 'Proyectos desarrollados durante el bootcamp de Factoria F5, tecnologías modernas y metodologías ágiles.',
    image: bootcampCover,
    emojiImage: bootcampGirl,
    color: '#ed6c02',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    count: '11 Proyectos',
    route: '/bootcamp'
  },
  {
    id: 'personales',
    title: 'Personales',
    subtitle: 'Iniciativas propias',
    description: 'Proyectos independientes donde exploro nuevas tecnologías y desarrollo mis propias ideas.',
    image: personalesCover,
    emojiImage: personalGirl,
    color: '#1976d2',
    technologies: ['React', 'JavaScript', 'MUI', 'TypeScript'],
    count: '6 Proyectos',
    route: '/personal'
  }
];

export default function ProjectsMain() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" sx={{
      py: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '80vh',
      justifyContent: 'center'
    }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #ed7302ff 40%, #1976d2 60%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
          }}
        >
          {t('Mis Proyectos')}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'text.secondary',
            fontWeight: 400,
            fontSize: { xs: '1rem', md: '1.3rem' },
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {t('Explora mi trabajo organizado por categorías')}
        </Typography>
      </Box>

      {/* Grid con diseño responsive */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ width: '100%' }}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={6} lg={5} xl={4} key={category.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 }
              }}
              style={{ height: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `2px solid ${category.color}${isDarkMode ? '30' : '20'}`,
                  borderRadius: 3,
                  p: { xs: 2, md: 3 },
                  background: isDarkMode
                    ? `linear-gradient(135deg, ${category.color}15, ${category.color}10)`
                    : `linear-gradient(135deg, ${category.color}08, ${category.color}05)`,
                  backdropFilter: 'blur(10px)',
                  height: { xs: 'auto', md: 320 },
                  width: '100%',
                  maxWidth: { xs: '100%', md: '480px' },
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'center' },
                  gap: { xs: 2, md: 3 },
                  mx: 'auto',
                  '&:hover': {
                    border: `2px solid ${category.color}${isDarkMode ? '50' : '40'}`,
                    boxShadow: `0 12px 40px ${category.color}${isDarkMode ? '30' : '20'}`,
                    background: isDarkMode
                      ? `linear-gradient(135deg, ${category.color}20, ${category.color}15)`
                      : `linear-gradient(135deg, ${category.color}12, ${category.color}08)`
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: category.color,
                  }
                }}
                onClick={() => navigate(category.route)}
              >
                {/* Avatar - Responsive */}
                <Box sx={{ 
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  width: { xs: '100%', md: 'auto' }
                }}>
                  <Avatar
                    src={category.image}
                    sx={{
                      width: { xs: 120, md: 130 },
                      height: { xs: 120, md: 130 },
                      border: `4px solid ${category.color}${isDarkMode ? '40' : '30'}`,
                      boxShadow: `0 6px 24px ${category.color}${isDarkMode ? '40' : '30'}`,
                    }}
                  />
                </Box>

                {/* Contenido */}
                <Box sx={{ 
                  flexGrow: 1, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between', 
                  height: { xs: 'auto', md: '100%' },
                  width: { xs: '100%', md: 'auto' },
                  textAlign: { xs: 'center', md: 'left' }
                }}>
                  {/* Header y descripción */}
                  <Box>
                    {/* Título con imagen personalizada */}
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      mb: 2,
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                      <Box
                        component="img"
                        src={category.emojiImage}
                        sx={{
                          width: { xs: 48, md: 42 },
                          height: { xs: 56, md: 50 },
                          borderRadius: '10%',
                          border: `2px solid ${category.color}${isDarkMode ? '40' : '30'}`,
                        }}
                      />
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 'bold', 
                          color: category.color, 
                          fontSize: { xs: '1.8rem', md: '1.7rem' }, 
                          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                        }}
                      >
                        {t(category.title)}
                      </Typography>
                    </Box>
                    
                    <Typography variant="h6" sx={{ 
                      color: 'text.secondary', 
                      fontWeight: '600', 
                      mb: 1.5, 
                      fontSize: { xs: '1.1rem', md: '1rem' } 
                    }}>
                      {t(category.subtitle)}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{
                      lineHeight: 1.4,
                      fontWeight: 'bold',
                      fontSize: { xs: '0.95rem', md: '0.9rem' },
                      mb: 2
                    }}>
                      {t(category.description)}
                    </Typography>
                  </Box>

                  {/* Tecnologías destacadas */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" display="block" gutterBottom sx={{ 
                      fontWeight: 'bold', 
                      fontSize: { xs: '0.9rem', md: '0.85rem' } 
                    }}>
                      {t('TECNOLOGÍAS DESTACADAS:')}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 0.6, 
                      flexWrap: 'wrap',
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                      {category.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="filled"
                          sx={{
                            fontSize: { xs: '0.8rem', md: '0.75rem' },
                            height: { xs: '26px', md: '24px' },
                            backgroundColor: category.color,
                            color: '#ffffff',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: alpha(category.color, 0.8),
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Información inferior */}
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: { xs: 'center', md: 'space-between' }, 
                    alignItems: 'flex-end',
                    mt: { xs: 1, md: 0 }
                  }}>
                    {/* Contador de proyectos */}
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: category.color,
                          fontWeight: 'bold',
                          fontSize: { xs: '1.3rem', md: '1.2rem' },
                          textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                        }}
                      >
                        {t(category.count)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Indicador de interacción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ width: '100%' }}
      >
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          sx={{
            mt: 4,
            fontStyle: 'italic',
            fontSize: { xs: '1.1rem', md: '1rem' }
          }}
        >
          {t('👉 Selecciona una categoría para explorar los proyectos')}
        </Typography>
        <ActionButtons
          prevPage="/about"
          prevLabel="Sobre mí"
          nextPage="/bootcamp"
          nextLabel="Bootcamp"
        />
      </motion.div>
    </Container>
  );
}