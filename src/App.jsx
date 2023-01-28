import React, { useEffect, useState } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';

function App() {
  const [theme, setTheme] = useState(null);

  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <button
        type='button'
        onClick={handleThemeSwitcher}
        className='fixed z-10 right-2 top-2 px-3 py-3 rounded-md'
      >
        <span className=' text-purple-600 dark:text-purple-500'>
          {theme !== 'dark' ? '🌛 Dark mode' : '🌞 Light mode'}
        </span>
      </button>
      <div className='App font-inter bg:white dark:bg-slate-900'>
        <div className='max-w-5xl mx-auto w-11/12'>
          <HeroSection />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
