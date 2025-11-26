import { Box, Container } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import NavigationButtons from './PageNavigation';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container sx={{ py: 2, minHeight: 0 }}>
          {children}
        </Container>
      </Box>

      {/* Botones flotantes */}
      <PageNavigation />

      <Footer />
    </Box>
  );
};

export default Layout;
