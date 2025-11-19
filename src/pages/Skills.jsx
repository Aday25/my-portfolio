import { Box, Grid, Card, CardContent, Typography, Chip } from '@mui/material';
import {
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaPaintBrush,
  FaCode,
  FaDatabase,
  FaShieldAlt,
  FaServer,
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

const skillCategories = [
  {
    category: 'Frontend',
    color: '#1976d2',
    skills: [
      { name: 'HTML', icon: <FaHtml5 color="#E34F26" size={24} /> },
      { name: 'CSS', icon: <FaCss3Alt color="#1572B6" size={24} /> },
      { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" size={24} /> },
      { name: 'Material UI', icon: <FaPaintBrush color="#007FFF" size={24} /> },
      { name: 'Figma', icon: <FaFigma color="#F24E1E" size={24} /> },
      { name: 'JavaScript', icon: <FaJsSquare color="#F7DF1E" size={24} /> },
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={24} /> },
      { name: 'React', icon: <FaReact color="#61DAFB" size={24} /> },
      { name: 'React Router', icon: <FaReact color="#CA4245" size={24} /> },
      { name: 'React Hook Form', icon: <FaReact color="#EC5990" size={24} /> }
    ]
  },
  {
    category: 'Backend',
    color: '#2e7d32',
    skills: [
      { name: 'TypeScript', icon: <SiTypescript color="#3178C6" size={24} /> },
      { name: 'Node.js', icon: <FaNodeJs color="#339933" size={24} /> },
      { name: 'Express.js', icon: <SiExpress color="#000000" size={24} /> },
      { name: 'Sequelize', icon: <SiSequelize color="#52B0E7" size={24} /> },
      { name: 'Mongoose', icon: <SiMongoose color="#880000" size={24} /> },
      { name: 'express-validator', icon: <FaCode color="#FF6B35" size={24} /> }
    ]
  },
  {
    category: 'Bases de datos',
    color: '#9c27b0',
    skills: [
      { name: 'MySQL', icon: <SiMysql color="#4479A1" size={24} /> },
      { name: 'MongoDB', icon: <SiMongodb color="#47A248" size={24} /> }
    ]
  },
  {
    category: 'Diseño',
    color: '#ed6c02',
    skills: [
      { name: 'Figma', icon: <FaFigma color="#F24E1E" size={24} /> },
      { name: 'Canva', icon: <SiCanva color="#00C4CC" size={24} /> },
      { name: 'Photoshop', icon: <SiAdobephotoshop color="#31A8FF" size={24} /> }
    ]
  },
  ,
  {
    category: 'Buenas prácticas',
    color: '#0288d1',
    skills: [
      { name: 'Gitflow', icon: <FaGitAlt color="#F05032" size={24} /> },
      { name: 'Clean Code', icon: <FaCode color="#4CAF50" size={24} /> },
      { name: 'MVC', icon: <FaCode color="#FF9800" size={24} /> },
      { name: 'SOLID', icon: <FaCode color="#9C27B0" size={24} /> },
      { name: 'POO', icon: <FaCode color="#2196F3" size={24} /> }
    ]
  },
  {
    category: 'DevOps',
    color: '#00695c',
    skills: [
      { name: 'Cultura DevOps', icon: <FaDocker color="#2496ED" size={24} /> },
      { name: 'CI/CD', icon: <FaCode color="#FF6B35" size={24} /> },
      { name: 'Docker', icon: <FaDocker color="#2496ED" size={24} /> },
      { name: 'Docker Hub', icon: <FaDocker color="#2496ED" size={24} /> },
      { name: 'Terminal', icon: <FaTerminal color="#4D4D4D" size={24} /> },
      { name: 'Gitflow', icon: <FaGitAlt color="#F05032" size={24} /> },
      { name: 'Trunk Based Development', icon: <FaCode color="#7952B3" size={24} /> },
      { name: 'Conventional commits', icon: <FaGitAlt color="#F05032" size={24} /> },
      { name: 'Github Projects', icon: <FaGithub color="#7952B3" size={24} /> },
      { name: 'Github Actions', icon: <FaGithub color="#2088FF" size={24} /> }
    ]
  },
  {
    category: 'Testing',
    color: '#d32f2f',
    skills: [
      { name: 'Jest', icon: <SiJest color="#C21325" size={24} /> },
      { name: 'Supertest', icon: <SiJest color="#C21325" size={24} /> },
      { name: 'Vitest', icon: <SiVitest color="#FCC72B" size={24} /> },
      { name: 'TDD', icon: <FaCode color="#4CAF50" size={24} /> }
    ]
  },
  {
    category: 'Seguridad',
    color: '#7b1fa2',
    skills: [
      { name: 'JWT', icon: <FaShieldAlt color="#FBC02D" size={24} /> },
      { name: 'Bcrypt', icon: <FaShieldAlt color="#4CAF50" size={24} /> }
    ]
  },
  {
    category: 'Herramientas',
    color: '#5d4037',
    skills: [
      { name: 'Git', icon: <FaGitAlt color="#F05032" size={24} /> },
      { name: 'Github', icon: <FaGithub color="#181717" size={24} /> },
      { name: 'VSCode', icon: <FaCode color="#007ACC" size={24} /> },
      { name: 'Postman', icon: <SiPostman color="#FF6C37" size={24} /> },
      { name: 'Scrum', icon: <FaCode color="#FF6B35" size={24} /> },
      { name: 'Jira', icon: <SiJira color="#0052CC" size={24} /> }
    ]
  }
];

export default function Skills() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
        Mis Habilidades Técnicas
      </Typography>

      <Grid container spacing={3}>
        {skillCategories.map((category, categoryIndex) => (
          <Grid item xs={12} sm={6} md={4} key={categoryIndex}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                bgcolor: 'background.paper',
                borderLeft: `4px solid ${category.color}`,
                '&:hover': {
                  boxShadow: 2,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent>
                {/* Header de la categoría */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Chip
                    label={category.category}
                    sx={{
                      bgcolor: category.color,
                      color: 'white',
                      fontWeight: 'bold'
                    }}
                  />
                </Box>

                {/* Lista de habilidades */}
                <Grid container spacing={1}>
                  {category.skills.map((skill, skillIndex) => (
                    <Grid item xs={6} key={skillIndex}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          p: 1,
                          borderRadius: 1,
                          '&:hover': {
                            bgcolor: 'action.hover'
                          }
                        }}
                      >
                        {/* Icono */}
                        <Box sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                          {skill.icon}
                        </Box>

                        {/* Nombre de la habilidad */}
                        <Typography variant="body2" fontWeight="medium">
                          {skill.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}