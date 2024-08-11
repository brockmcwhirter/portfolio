import React, { useState, useEffect } from 'react';
import Image from 'next/image';


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

const Experience: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
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
            <div className="flex-shrink-0 w-128 h-64 flex items-start justify-center ml-8">
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
  );
};

export default Experience;