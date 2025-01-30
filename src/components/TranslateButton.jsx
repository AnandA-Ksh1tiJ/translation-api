import React from 'react';
import { motion } from 'framer-motion';

const TranslateButton = ({ onClick, isLoading }) => {
  return (
    <motion.button
      onClick={onClick}
      disabled={isLoading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isLoading ? 'Translating...' : 'Translate'}
    </motion.button>
  );
};

export default TranslateButton;