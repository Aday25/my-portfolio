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
    console.log('🚀 Botón Comenzar presionado');
    
    // Verificar que audioPlayer esté disponible
    if (window.audioPlayer) {
      console.log('🎵 window.audioPlayer encontrado');
      console.log('📊 Estado actual:', window.audioPlayer.getState());
      
      // Inicializar y reproducir
      window.audioPlayer.play();
      
      // Verificar estado después de reproducir
      setTimeout(() => {
        console.log('📊 Estado después de play():', window.audioPlayer.getState());
      }, 500);
    } else {
      console.error('❌ window.audioPlayer NO está disponible');
      console.log('🔍 Objetos disponibles en window:', Object.keys(window).filter(k => k.includes('audio')));
    }
    
    // Navegar a home
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
          {/* Avatar circular con imagen */}
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

          {/* Título de bienvenida */}
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

          {/* Botón comenzar pequeño */}
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
      
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, mt: 8, mb: 2 }}>
          <Container maxWidth="xl" sx={{ flexGrow: 1, py: 3, pb: { xs: 2, md: 1 } }}>
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

              {/* Portada minimalista */}
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