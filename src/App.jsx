// App.jsx

import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container, Box, Typography, Paper } from '@mui/material';

// Importamos componentes reutilizables que forman la estructura común de la app
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

// Importamos la imagen de portada que se mostrará en la página principal
import coverImage from './assets/cover.png';

// Importamos las páginas que componen el portfolio
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';

function App() {
  return (
    // El Router envuelve toda la app para gestionar las rutas con react-router-dom
    <Router>
      {/* Navbar siempre visible en la parte superior */}
      <Navbar />

      {/* Contenedor principal que centra el contenido y le da márgenes verticales */}
      <Container
        sx={{
          mt: 4,                // margen superior
          mb: 4,                // margen inferior
          minHeight: '80vh',    // altura mínima para que el footer no se pegue al contenido
          display: 'flex',      // usamos flexbox para centrar el contenido
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Definimos las rutas de la app */}
        <Routes>
          {/* Rutas hacia las diferentes páginas del portfolio */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />

          {/* Ruta principal "/", que muestra un Paper con título e imagen */}
          <Route
            path="/"
            element={
              <Paper
                elevation={3}        // sombra para dar profundidad
                sx={{
                  width: {
                    xs: '90%',        // ancho en móviles
                    sm: '85%',        // ancho en tablets
                    md: 500           // ancho máximo en escritorio
                  },
                  mx: 'auto',         // centrado horizontal automático
                  p: 3,               // padding interno (espacio dentro del Paper)
                  borderRadius: 3,    // bordes redondeados
                  border: '3px solid black',  // borde negro estilo cómic
                  backgroundColor: '#fffde7', // fondo fijo color beige claro
                  textAlign: 'center',         // centrado del texto
                }}
              >
                {/* Título principal con estilos para evitar que se parta en varias líneas */}
                <Typography
                  variant="h4"
                  sx={{
                    whiteSpace: 'nowrap',    // fuerza a que el texto no se divida
                    overflow: 'hidden',      // oculta texto que se salga del contenedor
                    textOverflow: 'ellipsis',// pone puntos suspensivos si el texto es muy largo
                    fontWeight: 'bold',      // negrita
                    color: 'black',          // color fijo del texto (no cambia con tema)
                  }}
                  gutterBottom             // margen inferior para separar del siguiente elemento
                >
                  ¡Bienvenid@!
                </Typography>

                {/* Imagen de portada, responsive y con sombra para destacar */}
                <Box
                  component="img"
                  src={coverImage}
                  alt="Portada de Miss Material"
                  sx={{
                    width: '100%',        // ocupa todo el ancho disponible
                    height: 'auto',       // mantiene la proporción original
                    borderRadius: 2,      // bordes redondeados suaves
                    boxShadow: 3,         // sombra para dar profundidad
                    mt: 2,                // margen superior para separar del título
                  }}
                />
              </Paper>
            }
          />

          {/* Ruta comodín: redirige cualquier otra ruta a /home */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Container>

      {/* Footer siempre visible en la parte inferior */}
      <Footer />
    </Router>
  );
}

export default App;
