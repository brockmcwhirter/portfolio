'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const workExperience = [
  {
    company: 'Diamondback Energy',
    role: 'Software Engineer',
    period: 'April 2022 – Present',
    description: [
      'Built and maintained web applications using React and TypeScript.',
      'Developed and maintained backend systems with C#, ASP.NET Core 3.1, and .NET 6.',
      'Led the migration of legacy systems to .NET 6.',
      'Implemented Apollo GraphQL API using the Hot Chocolate framework.',
      'Automated workflows using PowerShell scripts and Automic.',
      'Managed CI/CD pipelines using Azure DevOps.',
    ],
    logo: '/diamondback-energy-logo.png',
  },
  {
    company: 'Consolidated Nuclear Security (CNS) Pantex Plant',
    role: 'Software Engineer',
    period: 'July 2020 – April 2022',
    description: [
      'Developed custom software solutions using LabView, TestStand, Diadem, and C#.',
      'Led the upgrade of legacy desktop applications for Windows 10 compatibility.',
      'Designed and developed desktop applications using C#, .NET, and WPF.',
    ],
    logo: '/pantex-logo.png',
  },
  {
    company: 'Texas Tech Application Development & Support',
    role: 'Software Developer',
    period: 'March 2020 – May 2020',
    description: [
      'Developed new modules for a payment system using Python 2.7 and Flask.',
      'Fixed bugs in the event management and ticketing system.',
    ],
    logo: '/texas-tech-logo.png',
  },
];


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
            <a href="/MackyMcWhirterResume.pdf" download className="inline-block bg-secondary text-light-text font-bold py-2 px-4 rounded hover:bg-accent transition duration-300 mt-4">
              Download My Resume
            </a>
          </div>
        </section>
        <section id="experience" className="min-h-screen bg-gray-200 dark:bg-dark-background dark:text-light-text p-8 pt-24">
          <h1 className="text-4xl font-bold mb-8">Experience</h1>
          <div className="space-y-16"> {/* Vertical spacing between items */}
            {workExperience.map((experience, index) => (
              <div key={index} className="flex items-start justify-between"> {/* Flexbox with justify-between */}
                <div className="sm:w-3/4 max-w-full">
                  <h3 className="text-2xl font-bold">{experience.role} - {experience.company}</h3>
                  <p className="text-gray-600">{experience.period}</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {experience.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex-shrink-0 w-64 h-64 flex items-start justify-center ml-8">
                  <Image
                    src={experience.logo as string}
                    alt={experience.company}
                    width={256} // Increased size (w-64)
                    height={256} // Increased size (h-64)
                    className=""
                  />
                </div>
              </div>
            ))}
          </div>
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
