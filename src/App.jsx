import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

// Componentes de layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Páginas
import coverImage from './assets/cover.png';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import BootcampProjects from './pages/BootcampPojects';
import PersonalProjects from './pages/PersonalProjects';
import Contact from './pages/Contact';

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      {/* ScrollToTop para volver arriba al cambiar de página */}
      <ScrollToTop />
      
      {/* Estructura principal con Flexbox para footer pegado abajo */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        {/* Navbar fijo arriba */}
        <Navbar />

        {/* Contenido principal que crece para empujar el footer */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            mt: 8, // Margen superior para el navbar fijo
            mb: 2, // Margen inferior pequeño
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              py: 3,
            }}
          >
            <Routes>
              {/* Rutas principales */}
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/projects/bootcamp" element={<BootcampProjects />} />
              <Route path="/projects/personales" element={<PersonalProjects />} />
              <Route path="/contact" element={<Contact />} />

              {/* Ruta principal "/" con portada */}
              <Route
                path="/"
                element={
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexGrow: 1,
                      py: 4,
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        width: {
                          xs: '90%',
                          sm: '85%',
                          md: 500
                        },
                        p: 3,
                        borderRadius: 3,
                        border: '3px solid black',
                        backgroundColor: '#fffde7',
                        textAlign: 'center',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: 'bold',
                          color: 'black',
                        }}
                        gutterBottom
                      >
                        {t('¡Bienvenid@!')}
                      </Typography>

                      <Box
                        component="img"
                        src={coverImage}
                        alt={t('Portada del portfolio')}
                        sx={{
                          width: '100%',
                          height: 'auto',
                          borderRadius: 2,
                          boxShadow: 3,
                          mt: 2,
                        }}
                      />
                    </Paper>
                  </Box>
                }
              />

              {/* Ruta comodín */}
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Container>
        </Box>

        {/* Footer siempre abajo */}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;