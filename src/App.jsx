import React, { useState } from 'react';
import Header from './components/Header';
import InputArea from './components/InputArea';
import LanguageDropdown from './components/LanguageDropdown';
import TranslateButton from './components/TranslateButton';
import TranslatedText from './components/TranslatedText';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('fra_Latn'); // Default: French
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const languages = [
    { code: 'fra_Latn', name: 'French' },
    { code: 'spa_Latn', name: 'Spanish' },
    { code: 'deu_Latn', name: 'German' },
    { code: 'hin_Deva', name: 'Hindi' },
  ];

  const translateText = async () => {
    setIsLoading(true);
    try {
      // Simulate API call (replace with actual API call)
      setTimeout(() => {
        setTranslatedText('Translated text will appear here.');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error translating text:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Header />
      <InputArea inputText={inputText} setInputText={setInputText} />
      <LanguageDropdown
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
        languages={languages}
      />
      <TranslateButton onClick={translateText} isLoading={isLoading} />
      {translatedText && <TranslatedText translatedText={translatedText} />}
    </div>
  );
}

export default App;