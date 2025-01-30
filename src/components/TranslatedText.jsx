import React from 'react';
import { motion } from 'framer-motion';

const TranslatedText = ({ translatedText }) => {
  return (
    <motion.div
      className="translated-text"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Translated Text:</h2>
      <p>{translatedText}</p>
    </motion.div>
  );
};

export default TranslatedText;