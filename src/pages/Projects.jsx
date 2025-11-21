import { Box, Typography, Grid, Card, CardContent, Button, Avatar, Container, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';

// Importa las imágenes correctamente
import bootcampCover from '../assets/projects/bootcamp-cover.jpg';
import personalesCover from '../assets/projects/personales-cover.jpg';

const categories = [
  {
    id: 'bootcamp',
    title: '👩🏼‍🎓 Bootcamp',
    subtitle: 'Full Stack & DevOps',
    description: 'Proyectos del bootcamp Factoria F5',
    image: bootcampCover,
    color: '#ed6c02',
    technologies: ['React', 'Node.js', 'MongoDB'],
    count: '11 proyectos',
    route: '/projects/bootcamp'
  },
  {
    id: 'personales',
    title: '👾 Personales',
    subtitle: 'Iniciativas propias',
    description: 'Proyectos independientes',
    image: personalesCover,
    color: '#1976d2',
    technologies: ['React', 'JavaScript', 'MUI'],
    count: '6 proyectos',
    route: '/projects/personales'
  }
];

export default function ProjectsMain() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ 
      py: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '80vh',
      justifyContent: 'center'
    }}>
      {/* Header */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography 
          variant="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ed7302ff 40%, #1976d2 60%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Mis Proyectos
        </Typography>
      </Box>

      {/* Grid con diseño horizontal */}
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={10} md={5} lg={5} key={category.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              style={{ height: '100%' }}
            >
              <Card 
                sx={{ 
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `2px solid ${category.color}20`,
                  borderRadius: 3,
                  p: 2,
                  background: `linear-gradient(135deg, ${category.color}08, ${category.color}15)`,
                  height: 210, // ALTURA MÁS COMPACTA PARA HORIZONTAL
                  width: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mx: 'auto',
                  '&:hover': {
                    border: `2px solid ${category.color}40`,
                    boxShadow: `0 8px 32px ${category.color}20`,
                    background: `linear-gradient(135deg, ${category.color}12, ${category.color}20)`
                  }
                }}
                onClick={() => navigate(category.route)}
              >
                {/* Avatar circular a la izquierda */}
                <Box sx={{ flexShrink: 0 }}>
                  <Avatar
                    src={category.image}
                    sx={{
                      width: 160,
                      height: 160,
                      border: `4px solid ${category.color}30`,
                      boxShadow: `0 4px 20px ${category.color}30`,
                    }}
                  />
                </Box>

                {/* Contenido a la derecha */}
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                  {/* Header y descripción */}
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: category.color, mb: 0.5 }}>
                      {category.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'text.secondary', fontWeight: '600', mb: 0.5 }}>
                      {category.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '0.8rem' }}>
                      {category.description}
                    </Typography>
                  </Box>

                   {/* Tecnologías destacadas */}
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom sx={{ fontWeight: 'bold' }}>
                      TECNOLOGÍAS:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                      {category.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{ 
                            borderColor: category.color,
                            color: category.color,
                            fontSize: '0.7rem'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* Información inferior */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    {/* Contador de proyectos */}
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: category.color,
                          fontWeight: 'bold',
                          fontSize: '0.9rem'
                        }}
                      >
                        {category.count}
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
      >
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center" 
          sx={{ mt: 4, fontStyle: 'italic' }}
        >
          👉 Selecciona una categoría para explorar los proyectos
        </Typography>
      </motion.div>
    </Container>
  );
}