'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';




const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModePreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(darkModePreference);

    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Sidebar />
      <div className="pl-64 ">

        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <section id="skills" className="min-h-screen bg-gray-200 dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Skills</h1>
          <p>My skills...</p>
        </section>
        <section id="projects" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24 pb-16">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>My projects...</p>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
