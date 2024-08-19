'use client';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useTheme } from 'next-themes';

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme();  // Access current theme and setTheme function

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');  // Toggle between dark and light mode
  };

  return (
    <div>
      <a href="#main-content" className="sr-only focus:not-sr-only">Skip to Content</a>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={theme === 'dark'} />
      <Sidebar />
      <main id="main-content" className="pl-64">
        <About darkMode={theme === 'dark'} />
        <Experience darkMode={theme === 'dark'} />
        <Education darkMode={theme === 'dark'} />
        <section id="skills" className="min-h-screen bg-primary dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h2 className="text-4xl font-bold">Skills</h2>
          <p className="text-text dark:text-gray-400">My skills...</p>
        </section>
        <section id="projects" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24 pb-16">
          <h2 className="text-4xl font-bold">Projects</h2>
          <p>My projects...</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
