// src/components/Layout.jsx
import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar siempre visible */}
      <Navbar />
      
      {/* Contenido principal que crece para empujar el footer abajo */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container
          sx={{
            mt: 4,
            mb: 4,
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
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