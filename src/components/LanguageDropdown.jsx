import React from 'react';
import { motion } from 'framer-motion';

const LanguageDropdown = ({ targetLanguage, setTargetLanguage, languages }) => {
  return (
    <motion.select
      value={targetLanguage}
      onChange={(e) => setTargetLanguage(e.target.value)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </motion.select>
  );
};

export default LanguageDropdown;