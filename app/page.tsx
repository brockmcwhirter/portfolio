'use client';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

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
        <section id="home" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4 text-lg">
            My name is Macky Brock McWhirter. I am a passionate technologist with a solid foundation in software engineering. I specialize in creating sophisticated software applications. I have a strong proficiency in machine learning, allowing me to construct and deploy complex models for various applications. Currently, I am pursuing a Master's degree in Electrical & Computer Engineering at Johns Hopkins University. My studies focus on an integrative approach that combines software engineering, machine learning, and Digital Signal Processing (DSP). This unique blend of disciplines enables me to merge theoretical insights with practical applications, preparing me for the challenges of these rapidly evolving fields. Welcome to my portfolio, where you can explore my work experience, educational background, technical skills, and projects that I have developed.
          </p>
          <div className="mt-8">
            <p className="text-lg">
              Prefer to see all my qualifications at a glance? Download my resume below.
            </p>
            <a href="/path/to/your-resume.pdf" download className="inline-block bg-secondary text-light-text font-bold py-2 px-4 rounded hover:bg-accent transition duration-300 mt-4">
              Download My Resume
            </a>
          </div>
        </section>
        <section id="experience" className="min-h-screen bg-gray-200 dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p>My experience...</p>
        </section>
        <section id="education" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Education</h1>
          <p>My education...</p>
        </section>
        <section id="skills" className="min-h-screen bg-gray-200 dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Skills</h1>
          <p>My skills...</p>
        </section>
        <section id="projects" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>My projects...</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
