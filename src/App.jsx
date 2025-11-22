import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import coverImage from './assets/cover.png';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import BootcampProjects from './pages/BootcampPojects';
import PersonalProjects from './pages/PersonalProjects';

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Container SIN espacios forzados */}
      <Container
        sx={{
          mt: 8, // Margen superior reducido
          flexGrow: 1, // Para que ocupe el espacio disponible
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects/bootcamp" element={<BootcampProjects />} />
          <Route path="/projects/personales" element={<PersonalProjects />} />

          <Route
            path="/"
            element={
              <Paper
                elevation={3}
                sx={{
                  width: {
                    xs: '90%',
                    sm: '85%', 
                    md: 500
                  },
                  mx: 'auto',
                  p: 3,
                  borderRadius: 3,
                  border: '3px solid black',
                  backgroundColor: '#fffde7',
                  textAlign: 'center',
                  backdropFilter: 'blur(10px)',
                  my: 2 // Margen vertical pequeño
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
                  ¡Bienvenid@!
                </Typography>

                <Box
                  component="img"
                  src={coverImage}
                  alt="Portada de Miss Material"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                    mt: 2,
                  }}
                />
              </Paper>
            }
          />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;