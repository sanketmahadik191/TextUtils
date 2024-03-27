import React, { useReducer, useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar'

const initialState = {
  text: '',
  darkMode: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    case 'CLEAR_TEXT':
      return { ...state, text: '' };
    case 'TO_UPPERCASE':
      return { ...state, text: state.text.toUpperCase() };
    case 'TO_LOWERCASE':
      return { ...state, text: state.text.toLowerCase() };
    case 'REMOVE_EXTRA_SPACES':
      return { ...state, text: state.text.replace(/\s+/g, ' ').trim() };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const { text, darkMode } = state;

  const handleTextChange = (e) => {
    const newText = e.target.value;
    dispatch({ type: 'SET_TEXT', payload: newText });

    // Calculate word count
    const words = newText.trim().split(/\s+/).filter(Boolean);
    setWordCount(words.length);

    // Calculate character count
    setCharCount(newText.length);

    // Calculate reading time (average reading speed: 200 words per minute)
    const wordsPerMinute = 30;
    const minutes = words.length / wordsPerMinute;
    setReadingTime(minutes.toFixed(1));
  };

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const clearText = () => {
    dispatch({ type: 'CLEAR_TEXT' });
    setWordCount(0);
    setCharCount(0);
    setReadingTime(0);
  };

  const toUppercase = () => {
    dispatch({ type: 'TO_UPPERCASE' });
  };

  const toLowercase = () => {
    dispatch({ type: 'TO_LOWERCASE' });
  };

  const removeExtraSpaces = () => {
    dispatch({ type: 'REMOVE_EXTRA_SPACES' });
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <Navbar></Navbar>
      <Main
        text={text}
        darkMode={darkMode}
        handleTextChange={handleTextChange}
        clearText={clearText}
        toUppercase={toUppercase}
        toLowercase={toLowercase}
        removeExtraSpaces={removeExtraSpaces}
        wordCount={wordCount}
        charCount={charCount}
        readingTime={readingTime}
        toggleTheme={toggleTheme}
      />
      <Preview text={text} darkMode={darkMode} />
      <Footer />
    </div>
  );
};

export default App; 