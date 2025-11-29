// ACUARIO REALISTA - VERSIÓN FINAL OPTIMIZADA PARA MÓVIL
// Inspirado en animaciones submarinas profesionales
// - Cada pez aparece UNA SOLA VEZ (no duplicados)
// - Los peces se voltean al cambiar dirección
// - Movimiento continuo, sin parones
// - No se reinician al cambiar tema dark/light
// - Scroll perfecto en móvil sin fondos blancos

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// ==== IMPORTAR IMÁGENES ====
import fish1 from '../assets/aquarium/fish1.png';
import fish2 from '../assets/aquarium/fish2.png';
import fish3 from '../assets/aquarium/fish3.png';
import fish4 from '../assets/aquarium/fish4.gif';
import fish5 from '../assets/aquarium/fish5.png';
import fish6 from '../assets/aquarium/fish6.png';
import fish7 from '../assets/aquarium/fish7.png';
import fish8 from '../assets/aquarium/fish8.png';
import fish9 from '../assets/aquarium/fish9.png';
import fish10 from '../assets/aquarium/fish10.png';
import fish11 from '../assets/aquarium/fish11.png';
import fish12 from '../assets/aquarium/fish12.png';
import fish00 from '../assets/aquarium/fish00.gif';
import rocksMobile from '../assets/aquarium/rocks-mobile.png';
import rocksDesktop from '../assets/aquarium/rocks-desktop.png';

// ========== PEZ QUE NADA INFINITAMENTE ==========
const SwimmingFish = ({ image, size, initialY, duration, delay, startFromLeft }) => {
  const fishId = useRef(`fish-${Math.random()}`).current;
  
  return (
    <motion.img
      key={fishId}
      src={image}
      alt="Pez nadando"
      className="swimming-fish"
      style={{
        position: 'absolute',
        width: size,
        height: 'auto',
        top: initialY,
        opacity: 0.65,
        pointerEvents: 'none',
        filter: 'drop-shadow(2px 2px 5px rgba(0,0,0,0.3))',
        zIndex: 5,
        transform: startFromLeft ? 'scaleX(1)' : 'scaleX(-1)',
      }}
      initial={{
        x: startFromLeft ? '-200px' : 'calc(100vw + 200px)',
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        x: startFromLeft ? 'calc(100vw + 200px)' : '-200px',
        opacity: [0, 0.9, 1, 0.9, 0],
        y: [0, -8, 0, 8, 0],
        scale: [0.7, 1, 0.9, 0.8, 0.6],
        rotate: [0, startFromLeft ? 2 : -2, 0, startFromLeft ? -1 : 1, 0],
      }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
        delay,
      }}
    />
  );
};

// ========== PEZ QUE SIGUE AL CURSOR (CON VOLTEO CORRECTO) ==========
const FollowerFish = ({ image, size }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const [facingRight, setFacingRight] = useState(true);
  const lastX = useRef(window.innerWidth / 2);

  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const handleMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      // Voltear según la dirección del movimiento
      const deltaX = targetX - lastX.current;
      if (Math.abs(deltaX) > 5) {
        setFacingRight(deltaX > 0);
        lastX.current = targetX;
      }
    };

    const animate = () => {
      setPosition(prev => {
        const dx = targetX - prev.x;
        const dy = targetY - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 5) {
          const speed = 0.04;
          return {
            x: prev.x + dx * speed,
            y: prev.y + dy * speed,
          };
        }
        return prev;
      });
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    const animation = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(animation);
    };
  }, []);

  return (
    <motion.img
      src={image}
      alt="Pez seguidor"
      animate={{
        rotate: [0, 3, -3, 0],
        scale: [1, 1.04, 0.96, 1],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute',
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: 'auto',
        opacity: 0.75,
        zIndex: 8,
        pointerEvents: 'none',
        transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)',
        transition: 'transform 0.4s ease',
        filter: 'drop-shadow(3px 3px 8px rgba(255,200,100,0.6))',
      }}
    />
  );
};

// ======== BURBUJAS DISTRIBUIDAS =========
const Bubble = ({ size, left, delay }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(173, 216, 230, 0.2))',
      boxShadow: '0 0 8px rgba(255,255,255,0.4)',
      zIndex: 6,
      pointerEvents: 'none',
      left,
      bottom: '-30px',
    }}
    animate={{
      y: [0, -window.innerHeight - 100],
      x: [0, Math.sin(delay * 12) * 25, -Math.sin(delay * 8) * 25, 0],
      opacity: [0, 0.5, 0.7, 0.4, 0],
      scale: [0.4, 1, 0.9, 0.7],
    }}
    transition={{
      duration: 16 + Math.random() * 12,
      delay,
      repeat: Infinity,
      ease: 'linear',
    }}
  />
);

// ======== ACUARIO COMPLETO =========
export default function RealisticAquarium({ children, isDarkMode }) {
  const [isMobile, setIsMobile] = useState(false);
  const fishImagesRef = useRef([fish1, fish2, fish3, fish4, fish5, fish6, fish7, fish8, fish9, fish10, fish11, fish12]);
  
  // Configuración fija de peces (NO cambia con isDarkMode)
  const fishConfigRef = useRef([
    { image: fish1, size: 80, initialY: '15%', duration: 35, delay: 0, startFromLeft: true },
    { image: fish2, size: 70, initialY: '25%', duration: 40, delay: 3, startFromLeft: false },
    { image: fish3, size: 90, initialY: '40%', duration: 32, delay: 6, startFromLeft: true },
    { image: fish4, size: 85, initialY: '55%', duration: 38, delay: 9, startFromLeft: false },
    { image: fish5, size: 75, initialY: '20%', duration: 36, delay: 12, startFromLeft: true },
    { image: fish6, size: 85, initialY: '35%', duration: 42, delay: 15, startFromLeft: false },
    { image: fish7, size: 60, initialY: '50%', duration: 34, delay: 18, startFromLeft: true },
    { image: fish8, size: 95, initialY: '30%', duration: 44, delay: 21, startFromLeft: false },
    { image: fish9, size: 70, initialY: '45%', duration: 37, delay: 24, startFromLeft: true },
    { image: fish10, size: 80, initialY: '60%', duration: 39, delay: 27, startFromLeft: false },
    { image: fish11, size: 75, initialY: '18%', duration: 41, delay: 30, startFromLeft: true },
    { image: fish12, size: 85, initialY: '38%', duration: 33, delay: 33, startFromLeft: false },
  ]);

  // Configuración fija de burbujas
  const bubbleConfigRef = useRef(
    [...Array(25)].map((_, i) => ({
      size: 5 + Math.random() * 9,
      left: `${(i * 4) % 100}%`,
      delay: i * 1.5,
    }))
  );

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);

    // SOLUCIÓN DEFINITIVA PARA MÓVIL: Fondo fijo que cubre todo
    const setBodyBackground = () => {
      document.body.style.background = isDarkMode
        ? 'linear-gradient(180deg, #071a2e 0%, #0a2c4e 40%, #02101f 100%)'
        : 'linear-gradient(180deg, #58b2ff 0%, #7ecbff 40%, #1e90ff 100%)';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.backgroundSize = 'cover';
      document.body.style.minHeight = '100vh';
    };

    setBodyBackground();

    return () => {
      window.removeEventListener('resize', check);
      // Limpiar estilos al desmontar
      document.body.style.background = '';
      document.body.style.backgroundAttachment = '';
      document.body.style.backgroundSize = '';
      document.body.style.minHeight = '';
    };
  }, [isDarkMode]);

  return (
    <>
      {/* ===== Fondo con Dark Mode ===== */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          zIndex: 0,
          background: isDarkMode
            ? 'linear-gradient(180deg, #071a2e 0%, #0a2c4e 40%, #02101f 100%)'
            : 'linear-gradient(180deg, #58b2ff 0%, #7ecbff 40%, #1e90ff 100%)',
          transition: 'background 0.5s ease',
          pointerEvents: 'none',
          // Asegura que cubre toda el área de scroll
          minHeight: '100vh',
          height: '100%',
        }}
      >
        {/* Fondo rocoso */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${isMobile ? rocksMobile : rocksDesktop})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
            opacity: 0.7,
            zIndex: 1,
          }}
        />

        {/* Luz ambiente */}
        <motion.div
          animate={{ opacity: [0.15, 0.08, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 25% 15%, rgba(255,255,255,0.1), transparent 60%)',
            zIndex: 2,
          }}
        />

        {/* PECES NORMALES - Cada uno aparece UNA SOLA VEZ */}
        {fishConfigRef.current.map((fish, i) => (
          <SwimmingFish key={`unique-fish-${i}`} {...fish} />
        ))}

        {/* PEZ QUE SIGUE AL CURSOR */}
        <FollowerFish image={fish00} size={90} />

        {/* BURBUJAS */}
        {bubbleConfigRef.current.map((bubble, i) => (
          <Bubble key={`bubble-${i}`} {...bubble} />
        ))}
      </div>

      {/* ===== CONTENIDO PRINCIPAL ===== */}
      <div style={{ 
        position: 'relative', 
        zIndex: 10, 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // Fondo completamente transparente
        background: 'transparent',
      }}>
        {children}
      </div>
    </>
  );
}