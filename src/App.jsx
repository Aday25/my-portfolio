import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Button, Avatar, Typography } from '@mui/material';
import { motion } from 'framer-motion';
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
import Bootcamp from './pages/Bootcamp';
import Personal from './pages/Personal';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound'

// Componente de portada minimalista
const CoverPage = () => {
  const { t } = useTranslation();

  const handleStart = () => {
    console.log('👉 Botón Comenzar presionado');
    
    if (window.audioPlayer) {
      console.log('🎵 window.audioPlayer encontrado');
      window.audioPlayer.play();
    } else {
      console.error('❌ window.audioPlayer NO está disponible');
    }
    
    window.location.href = '/#/home';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        minHeight: '80vh',
        background: 'transparent',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
          >
            <Avatar
              src={coverImage}
              sx={{
                width: 200,
                height: 200,
                mx: 'auto',
                mb: 3,
                border: '3px solid',
                borderColor: 'primary.main',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              }}
            />
          </motion.div>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            {t('¡Bienvenid@!')}
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="small"
              onClick={handleStart}
              sx={{
                px: 3,
                py: 1,
                fontSize: '0.9rem',
                fontWeight: 600,
                borderRadius: 2,
              }}
            >
              {t('Comenzar')} →
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        // Fondo que se aplicará detrás del acuario
        background: 'transparent',
      }}>
        <Navbar />

        {/* Contenido principal con altura flexible */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            mt: 8, // Para el navbar fijo
            minHeight: 'calc(100vh - 140px)', // Altura mínima menos navbar y footer
          }}
        >
          <Container 
            maxWidth="xl" 
            sx={{ 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              py: 3,
              px: { xs: 2, sm: 3, md: 4 },
              pb: { xs: 2, md: 1 }
            }}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/bootcamp" element={<Bootcamp />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<CoverPage />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </Container>
        </Box>

        <Footer />
      </Box>
    </Router>
  );
}

export default App;