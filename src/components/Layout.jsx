import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar siempre visible */}
      <Navbar />
      
      {/* Contenido principal - SIN ESPACIOS FIJOS */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container
          sx={{
            py: 2, // ← Padding vertical reducido y opcional
            minHeight: 0, // ← Elimina altura mínima forzada
          }}
        >
          {children}
        </Container>
      </Box>
      
      {/* Footer siempre en la parte inferior */}
      <Footer />
    </Box>
  );
};

export default Layout;