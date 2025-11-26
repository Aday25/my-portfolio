import { Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

export const AnimatedTitle = ({ children, delay = 0, variant = "h2" }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  const titleStyle = {
    fontWeight: 800,
    fontSize: { xs: '2.5rem', md: '3rem' },
    background: isDarkMode
      ? '#22d3ee'
      : 'linear-gradient(45deg, #1e40af 20%, #3b82f6 40%, #2563eb 60%, #1d4ed8 80%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: isDarkMode
      ? '0 0 30px rgba(34, 211, 238, 0.6), 0 0 60px rgba(34, 211, 238, 0.3)'
      : '2px 2px 4px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.1)',
    position: 'relative',
    display: 'inline-block',
    textAlign: 'center',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '10%',
      width: '80%',
      height: '3px',
      background: isDarkMode
        ? '#22d3ee'
        : 'linear-gradient(90deg, transparent, #3b82f6, #2563eb, transparent)',
      borderRadius: '2px',
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      style={{ textAlign: 'center' }}
    >
      <Typography variant={variant} sx={titleStyle}>
        {children}
      </Typography>
    </motion.div>
  );
};