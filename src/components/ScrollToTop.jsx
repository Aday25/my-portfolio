import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Componente que hace scroll al top cada vez que cambia la ruta
 * Debe colocarse dentro del Router en App.jsx
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll instantáneo al top cuando cambia la ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // No renderiza nada
}