// Skills.jsx - Versión moderna y responsive
import { Box, Grid, Card, CardContent, Typography, Chip, Container, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import {
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPaintBrush,
  FaCode,
  FaShieldAlt,
  FaDocker,
  FaFigma,
  FaTerminal,
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiJest,
  SiVitest,
  SiPostman,
  SiJira,
  SiExpress,
  SiSequelize,
  SiMongoose,
  SiCanva,
  SiAdobephotoshop
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';

// Array de datos SIN t() - fuera del componente
const skillCategoriesData = [
  {
    category: 'Frontend',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    skills: [
      { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={28} /> },
      { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={28} /> },
      { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" size={28} /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={28} /> },
      { name: 'Material UI', icon: <FaPaintBrush color="#007FFF" size={28} /> },
      { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" size={28} /> },
      { name: 'React', icon: <FaReact color="#61DAFB" size={28} /> },
      { name: 'React Router', icon: <FaReact color="#CA4245" size={28} /> },
      { name: 'React Hook Form', icon: <FaReact color="#EC5990" size={28} /> }
    ]
  },
  {
    category: 'Backend',
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    skills: [
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={28} /> },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" size={28} /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" size={28} /> },
      { name: 'Sequelize', icon: <SiSequelize color="#52B0E7" size={28} /> },
      { name: 'Mongoose', icon: <SiMongoose color="#880000" size={28} /> },
      { name: 'express-validator', icon: <FaCode color="#FF6B35" size={28} /> }
    ]
  },
  {
    category: 'Bases de datos',
    gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    skills: [
      { name: 'MySQL', icon: <SiMysql color="#4479A1" size={28} /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={28} /> }
    ]
  },
  {
    category: 'Testing',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    skills: [
      { name: 'Jest', icon: <SiJest color="#C21325" size={28} /> },
      { name: 'Supertest', icon: <SiJest color="#C21325" size={28} /> },
      { name: 'Vitest', icon: <SiVitest color="#FCC72B" size={28} /> },
      { name: 'TDD', icon: <FaCode color="#4CAF50" size={28} /> }
    ]
  },
  {
    category: 'Seguridad',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    skills: [
      { name: 'JWT', icon: <FaShieldAlt color="#FBC02D" size={28} /> },
      { name: 'Bcrypt', icon: <FaShieldAlt color="#4CAF50" size={28} /> }
    ]
  },
  {
    category: 'Diseño',
    gradient: 'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
    skills: [
      { name: 'Figma', icon: <FaFigma color="#F24E1E" size={28} /> },
      { name: 'Canva', icon: <SiCanva color="#00C4CC" size={28} /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop color="#31A8FF" size={28} /> }
    ]
  },
  {
    category: 'Herramientas',
    gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" size={28} /> },
      { name: 'Github', icon: <FaGithub color="#181717" size={28} /> },
      { name: 'VSCode', icon: <FaCode color="#007ACC" size={28} /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" size={28} /> },
      { name: 'Scrum', icon: <FaCode color="#FF6B35" size={28} /> },
      { name: 'Jira', icon: <SiJira color="#0052CC" size={28} /> }
    ]
  },
  {
    category: 'Buenas prácticas',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    skills: [
      { name: 'Clean Code', icon: <FaCode color="#4CAF50" size={28} /> },
      { name: 'MVC', icon: <FaCode color="#FF9800" size={28} /> },
      { name: 'SOLID', icon: <FaCode color="#9C27B0" size={28} /> },
      { name: 'POO', icon: <FaCode color="#2196F3" size={28} /> }
    ]
  },
  {
    category: 'DevOps',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    skills: [
      { name: 'Cultura DevOps', icon: <FaDocker color="#2496ED" size={28} /> },
      { name: 'CI/CD', icon: <FaCode color="#FF6B35" size={28} /> },
      { name: 'Docker', icon: <FaDocker color="#2496ED" size={28} /> },
      { name: 'Docker Hub', icon: <FaDocker color="#2496ED" size={28} /> },
      { name: 'Terminal', icon: <FaTerminal color="#4D4D4D" size={28} /> },
      { name: 'Gitflow', icon: <FaGitAlt color="#F05032" size={28} /> },
      { name: 'Trunk', icon: <FaCode color="#7952B3" size={28} /> },
      { name: 'Conventional commits', icon: <FaGitAlt color="#F05032" size={28} /> },
      { name: 'Github Projects', icon: <FaGithub color="#7952B3" size={28} /> },
      { name: 'Github Actions', icon: <FaGithub color="#2088FF" size={28} /> }
    ]
  }
];

const MotionCard = motion(Card);
const MotionBox = motion(Box);

export default function Skills() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { t } = useTranslation();

  // Transformar los datos con t() DENTRO del componente
  const skillCategories = skillCategoriesData.map(category => ({
    ...category,
    category: t(category.category),
    skills: category.skills.map(skill => ({
      ...skill,
      name: t(skill.name)
    }))
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 3 },
      }}
    >
      <Container maxWidth="xl">
        {/* Título principal con animación */}
        <Box sx={{ mb: 6 }}>
          <AnimatedTitle>
            {t('Habilidades Técnicas')}
          </AnimatedTitle>
        </Box>

        {/* Grid de categorías con animación */}
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} sm={6} lg={4} key={categoryIndex}>
                <MotionCard
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  elevation={0}
                  sx={{
                    height: '100%',
                    background: isDarkMode
                      ? `linear-gradient(135deg, ${alpha('#667eea', 0.15)}, ${alpha('#764ba2', 0.1)})`
                      : `linear-gradient(135deg, ${alpha('#667eea', 0.08)}, ${alpha('#764ba2', 0.05)})`,
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDarkMode ? alpha('#fff', 0.1) : alpha('#667eea', 0.2)}`,
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      border: `1px solid ${isDarkMode ? alpha('#fff', 0.3) : alpha('#667eea', 0.4)}`,
                      boxShadow: `0 12px 40px ${isDarkMode ? alpha('#000', 0.5) : alpha('#667eea', 0.2)}`,
                      background: isDarkMode
                        ? `linear-gradient(135deg, ${alpha('#667eea', 0.2)}, ${alpha('#764ba2', 0.15)})`
                        : `linear-gradient(135deg, ${alpha('#667eea', 0.12)}, ${alpha('#764ba2', 0.08)})`
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: category.gradient,
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                    {/* Header de la categoría */}
                    <Box sx={{ mb: 3 }}>
                      <Chip
                        label={category.category}
                        sx={{
                          background: category.gradient,
                          color: 'white',
                          fontWeight: 700,
                          fontSize: { xs: '0.85rem', md: '0.95rem' },
                          px: 1.5,
                          height: { xs: 32, md: 36 },
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                        }}
                      />
                    </Box>

                    {/* Grid de habilidades */}
                    <Grid container spacing={{ xs: 1.5, md: 2 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Grid item xs={6} key={skillIndex}>
                          <MotionBox
                            whileHover={{
                              scale: 1.08,
                              transition: { type: 'spring', stiffness: 400, damping: 10 }
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                p: { xs: 1.5, md: 2 },
                                borderRadius: 2,
                                background: isDarkMode
                                  ? 'rgba(255, 255, 255, 0.04)'
                                  : 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid',
                                borderColor: isDarkMode
                                  ? 'rgba(255, 255, 255, 0.06)'
                                  : 'rgba(255, 255, 255, 0.4)',
                                transition: 'all 0.2s ease',
                                cursor: 'pointer',
                                '&:hover': {
                                  background: isDarkMode
                                    ? 'rgba(255, 255, 255, 0.1)'
                                    : 'rgba(255, 255, 255, 0.9)',
                                  borderColor: isDarkMode
                                    ? 'rgba(255, 255, 255, 0.2)'
                                    : 'rgba(33, 150, 243, 0.3)',
                                  transform: 'translateY(-3px)',
                                  boxShadow: isDarkMode
                                    ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                                    : '0 4px 12px rgba(33, 150, 243, 0.15)',
                                }
                              }}
                            >
                              {/* Icono */}
                              <Box
                                sx={{
                                  mb: 1,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                              >
                                {skill.icon}
                              </Box>

                              {/* Nombre */}
                              <Typography
                                variant="body2"
                                fontWeight={600}
                                align="center"
                                sx={{
                                  fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.85rem' },
                                  color: 'text.primary',
                                  lineHeight: 1.3,
                                  wordBreak: 'break-word',
                                }}
                              >
                                {skill.name}
                              </Typography>
                            </Box>
                          </MotionBox>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </MotionBox>
      </Container>
    </Box>
  );
}