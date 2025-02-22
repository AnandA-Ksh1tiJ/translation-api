import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Real-Time Translation
    </motion.h1>
  );
};

export default Header;