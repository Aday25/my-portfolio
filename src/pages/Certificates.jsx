import React, { useState } from 'react'
import { Box, Typography, Card, CardMedia, CardContent, Grid, Modal, IconButton, Chip, useTheme, alpha } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import CloseIcon from '@mui/icons-material/Close'
import { useTranslation } from 'react-i18next';
import { AnimatedTitle } from '../components/AnimatedTitle';
import ActionButtons from '../components/ActionButtons';

// Importamos imágenes de certificados actualizadas
import bootcampImg from '../assets/certificates/certificado-bootcamp.jpeg'
import portafolioImg from '../assets/certificates/portafolio.png'
import hackathonImg from '../assets/certificates/hackathon.jpg'
import canvaImg from '../assets/certificates/canva.png'
import presentacionImg from '../assets/certificates/presentación.png'
import iaImg from '../assets/certificates/ia.png'
import equipoImg from '../assets/certificates/equipo.png'

const certificatesData = [
  {
    title: 'Bootcamp Fullstack Developer',
    issuer: 'Factoría F5',
    image: bootcampImg,
    date: 'may. 2025 - nov. 2025',
    skills: ['HTML5', 'CSS', 'JavaScript', 'TypeScript', 'Figma', 'Tailwind CSS', 'React.js', 'React Router'],
    details: 'Formación intensiva en desarrollo fullstack con tecnologías modernas y metodologías ágiles.',
    type: 'bootcamp',
    color: '#1976d2'
  },
  {
    title: 'Tu portafolio como desarrollador',
    issuer: 'Capacítate para el Empleo',
    image: portafolioImg,
    date: 'nov. 2025',
    credentialId: '8408ac86-4d65-4d7c-8595-a5f7536c455c',
    skills: ['Portafolio Digital', 'Desarrollo', 'Promo Profesional'],
    details: 'Identificación de información necesaria, estructura y herramientas disponibles para la gestión de un portafolio digital para promocionar tu perfil como desarrollador.',
    type: 'certification',
    color: '#9c27b0'
  },
  {
    title: 'Finalista - Hackathon',
    issuer: 'Somos F5 y Sanitas',
    image: hackathonImg,
    date: 'sept. 2025',
    credentialId: '',
    skills: ['Trabajo en equipo', 'Frontend', 'Colaboración'],
    details: 'Diploma Finalista en la Hackathon de 48h, en la que construimos una web para controlar la toma de medicamentos.',
    type: 'certification',
    color: '#2e7d32'
  },
  {
    title: 'Fundamentos para docentes',
    issuer: 'Canva',
    image: canvaImg,
    date: 'sept. 2025',
    credentialId: 'a02a11',
    skills: ['Trabajo en equipo', 'Diseño Visual', 'Colaboración'],
    details: 'Curso que enseña a utilizar las herramientas esenciales de Canva para crear contenidos visuales, organizar proyectos y trabajar de forma eficiente en equipo.',
    type: 'certification',
    color: '#ed6c02'
  },
  {
    title: 'Habilidades de presentación',
    issuer: 'Capacítate para el Empleo',
    image: presentacionImg,
    date: 'sept. 2025',
    credentialId: '966c3517-ac5b-4223-bcfa-24f91ccb739a',
    skills: ['Presentaciones', 'Comunicación', 'Oratoria'],
    details: 'Capacitación en habilidades para estructurar y realizar presentaciones efectivas, controlar la información, manejar el protocolo y usar recursos adecuados.',
    type: 'certification',
    color: '#00695c'
  },
  {
    title: 'IA Generativa',
    issuer: 'Capacítate para el Empleo',
    image: iaImg,
    date: 'sept. 2025',
    credentialId: 'c3011c35-e311-463c-b2ce-ba9baafd9baf',
    skills: ['IA generativa', 'PROMPT', 'Inteligencia Artificial'],
    details: 'Certificación en inteligencia artificial generativa y técnicas de prompt engineering.',
    type: 'certification',
    color: '#7b1fa2'
  },
  {
    title: 'Trabajo en equipo',
    issuer: 'Capacítate para el Empleo',
    image: equipoImg,
    date: 'sept. 2025',
    credentialId: '8624c7bd-6c21-4a07-bec5-782eeaa6f5fa',
    skills: ['Trabajo en equipo', 'Coordinación', 'Liderazgo'],
    details: 'Formación en trabajo en equipo: desarrollo de habilidades para coordinar roles, seguir etapas clave y alcanzar objetivos comunes bajo un liderazgo efectivo.',
    type: 'certification',
    color: '#d32f2f'
  }
];

// Variantes de animación para desplegar y ocultar detalles del certificado
const collapseVariants = {
  open: { opacity: 1, height: 'auto', marginTop: 8 },
  closed: { opacity: 0, height: 0, marginTop: 0 }
}

export default function Certificates() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [modalImg, setModalImg] = useState('')
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'
  const { t } = useTranslation();

  // AHORA SÍ puedes usar t() aquí dentro del componente
  const certificates = certificatesData.map(cert => ({
    ...cert,
    title: t(cert.title),
    issuer: t(cert.issuer),
    details: t(cert.details),
    skills: cert.skills.map(skill => t(skill))
  }))

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  const handleOpenModal = (img) => {
    setModalImg(img)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setModalImg('')
  }

  const cardStyle = {
    width: '340px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
    borderRadius: 3,
    overflow: 'visible',
    background: isDarkMode
      ? `linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8))`
      : `linear-gradient(135deg, ${alpha('#ed6c02', 0.08)}, ${alpha('#1976d2', 0.05)})`,
    backdropFilter: 'blur(10px)',
    position: 'relative',
    '&:hover': {
      border: `2px solid ${isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
      boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
      transform: 'translateY(-4px)',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <Box sx={{ mb: 3 }}>
      <Box sx={{ mb: 6 }}>
        <AnimatedTitle>
          {t('Certificaciones y Formación')}
        </AnimatedTitle>
      </Box>
      {/* Grid para tarjetas */}
      <Grid container spacing={3} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              sx={cardStyle}
              onClick={() => toggleExpand(index)}
            >
              {/* Línea superior decorativa */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: cert.color,
                  borderRadius: '3px 3px 0 0'
                }}
              />

              <CardMedia
                component="img"
                height="200"
                image={cert.image}
                alt={cert.title}
                onClick={(e) => {
                  e.stopPropagation()
                  handleOpenModal(cert.image)
                }}
                sx={{
                  cursor: 'pointer',
                  borderBottom: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: cert.color, textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
                  {cert.title}
                </Typography>
                <Typography variant="subtitle1" color="text.primary" gutterBottom sx={{ fontWeight: '600' }}>
                  {cert.issuer}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {t('Expedición:')} {cert.date}
                </Typography>

                {/* Chips de habilidades */}
                <Box sx={{ mt: 1, mb: 1 }}>
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      size="small"
                      variant="filled"
                      sx={{
                        mr: 0.5,
                        mb: 0.5,
                        fontSize: '0.7rem',
                        height: '24px',
                        backgroundColor: cert.color,
                        color: '#fff',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: alpha(cert.color, 0.8),
                        }
                      }}
                    />
                  ))}
                </Box>
              </CardContent>

              {/* Animación para mostrar/ocultar detalles */}
              <AnimatePresence initial={false}>
                {expandedCard === index && (
                  <motion.div
                    key="content"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={collapseVariants}
                    style={{ overflow: 'hidden' }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <CardContent sx={{ pt: 0 }}>
                      <Typography variant="body2" color="text.primary" paragraph>
                        {cert.details}
                      </Typography>
                      {cert.credentialId && (
                        <Typography variant="caption" color="text.secondary">
                          {t('ID de credencial:')} {cert.credentialId}
                        </Typography>
                      )}
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para mostrar la imagen ampliada del certificado */}
      <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '90vw',
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 1,
            borderRadius: 2,
            outline: 'none',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IconButton
            onClick={handleCloseModal}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'black', zIndex: 10 }}
          >
            <CloseIcon />
          </IconButton>

          <img
            src={modalImg}
            alt={t('Certificado ampliado')}
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              borderRadius: 8,
              boxShadow: '0 0 20px rgba(0,0,0,0.8)',
              display: 'block',
            }}
          />
        </Box>
      </Modal>
      <ActionButtons
        prevPage="/skills"
        prevLabel="Habilidades"
        nextPage="/contact"
        nextLabel="Contacto"
      />
    </Box>
  )
}