import React from 'react';
import Image from 'next/image';

const workExperience = [
  {
    company: 'Diamondback Energy',
    role: 'Software Engineer',
    period: 'April 2022 – Present',
    description: [
      'Developed and maintained web applications using React and TypeScript.',
      'Managed backend systems with C#, ASP.NET Core 3.1, and .NET 6.',
      'Led the migration of legacy systems to .NET 6, ensuring seamless integration.',
      'Implemented Apollo GraphQL API using the Hot Chocolate framework for efficient data handling.',
      'Automated workflows with PowerShell scripts and Automic to enhance operational efficiency.',
      'Managed CI/CD pipelines utilizing Azure DevOps to streamline development processes.',
    ],
    logoLight: '/diamondback-energy-logo.png',
    logoDark: '/FANG_BIG.png',
  },
  {
    company: 'Consolidated Nuclear Security (CNS) Pantex Plant',
    role: 'Software Engineer',
    period: 'July 2020 – April 2022',
    description: [
      'Engineered custom software solutions using LabVIEW, TestStand, Diadem, and C#.',
      'Led the upgrade of legacy desktop applications for Windows 10 compatibility, ensuring system stability.',
      'Designed and developed desktop applications using C#, .NET, and WPF, enhancing user experience.',
    ],
    logoLight: '/pantex-logo.png',
    logoDark: '/pantex-logo.png',
  },
  {
    company: 'Texas Tech Application Development & Support',
    role: 'Software Developer',
    period: 'March 2020 – May 2020',
    description: [
      'Developed new modules for a payment system using Python 2.7 and Flask, improving payment processing efficiency.',
      'Identified and resolved bugs in the event management and ticketing system, enhancing system reliability.',
    ],
    logoLight: '/texas-tech-logo.png',
    logoDark: '/texas-tech-logo.png',
  },
];

const Experience: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="experience" className="min-h-screen bg-primary dark:bg-dark-background dark:text-light-text p-8 pt-24">
      <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="space-y-16">
        {workExperience.map((experience, index) => (
          <div key={index} className="flex items-start justify-between">
            <div className="sm:w-3/4 max-w-full">
              <h3 className="text-2xl font-bold">{experience.company}</h3>
              <h4 className="text-xl font-medium mt-1">{experience.role}</h4>
              <p className="text-text dark:text-gray-400">{experience.period}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 w-64 h-64 flex items-start justify-center ml-8">
              <Image
                src={darkMode ? experience.logoDark : experience.logoLight}
                alt={`${experience.company} Logo`}
                width={256}
                height={256}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
