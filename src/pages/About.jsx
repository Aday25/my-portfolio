import { Box, Typography, Paper, Chip, Stack, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import GroupIcon from '@mui/icons-material/Group';
import TargetIcon from '@mui/icons-material/Flag';
import WorkIcon from '@mui/icons-material/WorkHistory';
import PersonIcon from '@mui/icons-material/Person';
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

const MotionPaper = motion(Paper);

export default function About() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  const sections = [
    {
      icon: <PersonIcon sx={{ fontSize: 24 }} />,
      title: t('PERFIL PROFESIONAL'),
      content: t('Desarrolladora Web Full Stack y DevOps, finalizando el Módulo de Grado Superior de Desarrollo de Aplicaciones Web (DAW). Siempre centrada en el aprendizaje continuo.'),
      chips: ['Full Stack', 'DevOps', 'JavaScript', 'React', 'Node.js'],
      color: '#1976d2'
    },
    {
      icon: <GroupIcon sx={{ fontSize: 24 }} />,
      title: t('APTITUDES'),
      content: t('Soy una persona resolutiva, constante y comprometida. Tengo facilidad para organizarme, trabajar de forma autónoma y tomar decisiones con criterio cuando la situación lo requiere.'),
      chips: [t('Resolutiva'), t('Constante'), t('Organizada'), t('Empática'), t('Trabajo en equipo')],
      color: '#9c27b0'
    },
    {
      icon: <TargetIcon sx={{ fontSize: 24 }} />,
      title: t('OBJETIVO PROFESIONAL'),
      content: t('Incorporarme a un entorno de desarrollo donde pueda seguir creciendo, aportar valor desde el inicio y enfrentar, y afrontar superando, retos reales.'),
      chips: [t('Crecimiento'), t('Aportar valor'), t('Retos reales'), t('Evolución profesional')],
      color: '#2e7d32'
    },
    {
      icon: <WorkIcon sx={{ fontSize: 24 }} />,
      title: t('EXPERIENCIA LABORAL'),
      content: t('Trayectoria previa en los sectores de hostelería, sanidad y comercio, desempeñando funciones administrativas y de atención al cliente.'),
      chips: [t('Administración'), t('Atención al cliente'), t('Autogestión'), t('Resolución de incidencias')],
      color: '#ed6c02'
    }
  ];

  return (
    <>
      <Box sx={{
        py: 4,
        px: { xs: 2, sm: 3 },
      }}>
        <Container maxWidth="xl">
          {/* Header simple */}
          <Box sx={{ mb: 6 }}>
            <AnimatedTitle>
              {t('Sobre Mí')}
            </AnimatedTitle>
          </Box>

          {/* 4 Cards en la MISMA LÍNEA - Usando flexbox */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 3,
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: { xs: 'nowrap', md: 'nowrap' },
            }}
          >
            {sections.map((section, index) => (
              <Box
                key={index}
                sx={{
                  flex: { xs: '0 1 auto', md: '1 1 0px' },
                  minWidth: { xs: '100%', md: '270px' },
                  maxWidth: { xs: '100%', md: '300px' },
                }}
              >
                <MotionPaper
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 }
                  }}
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    border: `2px solid ${section.color}${isDarkMode ? '30' : '20'}`,
                    borderRadius: 3,
                    p: 3,
                    background: isDarkMode
                      ? `linear-gradient(135deg, ${section.color}15, ${section.color}10)`
                      : `linear-gradient(135deg, ${section.color}08, ${section.color}05)`,
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden',
                    position: 'relative',
                    '&:hover': {
                      border: `2px solid ${section.color}${isDarkMode ? '50' : '40'}`,
                      boxShadow: `0 8px 32px ${section.color}${isDarkMode ? '25' : '20'}`,
                      background: isDarkMode
                        ? `linear-gradient(135deg, ${section.color}20, ${section.color}15)`
                        : `linear-gradient(135deg, ${section.color}12, ${section.color}08)`
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: section.color,
                    }
                  }}
                >
                  <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Header de la sección */}
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${section.color}20, ${section.color}40)`,
                          border: `2px solid ${section.color}${isDarkMode ? '40' : '30'}`,
                          mx: 'auto',
                          mb: 1,
                        }}
                      >
                        {section.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          fontSize: '1rem',
                          lineHeight: 1.4,
                          minHeight: '1.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {section.title}
                      </Typography>
                    </Box>

                    {/* Contenido */}
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: 'text.primary',
                        mb: 2,
                        fontSize: '1rem',
                        textAlign: 'center',
                        flex: 1,
                      }}
                    >
                      {section.content}
                    </Typography>

                    {/* Chips */}
                    <Box sx={{ mt: 'auto' }}>
                      <Stack direction="row" spacing={0.5} flexWrap="wrap" useFlexGap justifyContent="center">
                        {section.chips.map((chip, chipIndex) => (
                          <Chip
                            key={chipIndex}
                            label={chip}
                            size="small"
                            variant="filled"
                            sx={{
                              mb: 0.5,
                              fontSize: '0.7rem',
                              height: '24px',
                              backgroundColor: section.color,
                              color: isDarkMode ? '#fff' : '#fff',
                              '&:hover': {
                                backgroundColor: alpha(section.color, 0.8),
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                </MotionPaper>
              </Box>
            ))}
          </Box>

          {/* Cita al final */}
          <Box sx={{ textAlign: 'center', mt: 2, pt: 4, borderTop: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontStyle: 'italic',
                fontWeight: 700,
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              {t('Comprometida con el aprendizaje continuo y la excelencia en el desarrollo de software')}
            </Typography>
          </Box>
         <ActionButtons
            prevPage="/home"
            prevLabel="Inicio"
            nextPage="/projects"
            nextLabel="Proyectos"
          />
        </Container>
      </Box>
    </>
  );
}