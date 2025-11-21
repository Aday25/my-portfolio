import { Box, Typography, Paper, Divider, Chip, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import TargetIcon from '@mui/icons-material/Flag';
import WorkIcon from '@mui/icons-material/WorkHistory';
import PersonIcon from '@mui/icons-material/Person';

export default function About() {
  const sections = [
    {
      icon: <PersonIcon color="primary" sx={{ fontSize: 30 }} />,
      title: '💻 PERFIL PROFESIONAL',
      content: 'Desarrolladora Web Full Stack y DevOps, finalizando el Módulo de Grado Superior de Desarrollo de Aplicaciones Web (DAW). Actualmente centrada en el aprendizaje práctico de tecnologías como JavaScript, React y Node.js, con una orientación clara hacia el desarrollo de soluciones reales y eficientes.',
      chips: ['Full Stack', 'DevOps', 'JavaScript', 'React', 'Node.js']
    },
    {
      icon: <GroupIcon color="secondary" sx={{ fontSize: 30 }} />,
      title: '✅ COMPETENCIAS PERSONALES',
      content: 'Soy una persona resolutiva, constante y comprometida. Tengo facilidad para organizarme, trabajar de forma autónoma y tomar decisiones con criterio cuando la situación lo requiere. Aporto paciencia, empatía, implicación personal y la capacidad de mantener la calma y la eficiencia incluso bajo presión. Me implico mucho con mis compañeros, aporto al equipo y me esfuerzo en generar un entorno colaborativo, positivo y confiable.',
      chips: ['Resolutiva', 'Constante', 'Organizada', 'Empática', 'Trabajo en equipo']
    },
    {
      icon: <TargetIcon color="success" sx={{ fontSize: 30 }} />,
      title: '👩🏻‍💻 OBJETIVO PROFESIONAL',
      content: 'Incorporarme a un entorno de desarrollo donde pueda seguir creciendo, aportar valor desde el inicio y enfrentar retos reales. Busco una oportunidad que me permita aplicar lo aprendido y continuar mi evolución como desarrolladora, en un equipo dinámico y con visión de futuro.',
      chips: ['Crecimiento', 'Aportar valor', 'Retos reales', 'Evolución profesional']
    },
    {
      icon: <WorkIcon color="warning" sx={{ fontSize: 30 }} />,
      title: '📆 EXPERIENCIA LABORAL - Técnico Superior en Administración y Finanzas',
      content: 'Trayectoria previa en los sectores de hostelería, sanidad y comercio, desempeñando funciones administrativas y de atención al cliente. Estas experiencias me permitieron desarrollar competencias clave como la organización, la responsabilidad, la comunicación efectiva y la adaptabilidad en entornos exigentes. En ciertos contextos asumí la responsabilidad total de la operativa, lo que fortaleció mi capacidad de autogestión, priorización de tareas, resolución ágil de incidencias y toma de decisiones sin supervisión directa, manteniendo siempre un trato cercano, profesional y eficiente con los usuarios.',
      chips: ['Administración', 'Atención al cliente', 'Autogestión', 'Resolución de incidencias']
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        Sobre Mí
      </Typography>

      <Stack spacing={4}>
        {sections.map((section, index) => (
          <Paper 
            key={index}
            elevation={2} 
            sx={{ 
              p: 3,
              borderLeft: `4px solid`,
              borderLeftColor: 'primary.main',
              '&:hover': {
                boxShadow: 4,
                transition: 'all 0.3s ease'
              }
            }}
          >
            {/* Header de la sección */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {section.icon}
              <Typography 
                variant="h6" 
                sx={{ 
                  ml: 2, 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                {section.title}
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            {/* Contenido */}
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
              {section.content}
            </Typography>

            {/* Chips de habilidades/competencias */}
            <Box sx={{ mt: 2 }}>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {section.chips.map((chip, chipIndex) => (
                  <Chip
                    key={chipIndex}
                    label={chip}
                    size="small"
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                ))}
              </Stack>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}