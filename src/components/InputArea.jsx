import React from 'react';
import { motion } from 'framer-motion';

const InputArea = ({ inputText, setInputText }) => {
  return (
    <motion.textarea
      placeholder="Enter text to translate..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default InputArea;