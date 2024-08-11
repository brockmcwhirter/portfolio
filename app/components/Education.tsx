import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const educationData = [
  {
    institution: 'Johns Hopkins University',
    degree: 'Master of Science in Electrical & Computer Engineering',
    period: '(IN-PROGRESS)',
    coursework: ['Machine Learning using Signal Processing', 'Cloud Computing (AWS)', 'Digital Signal Processing', 'Computer Graphics (C++/OpenGL)', 'Deep Neural Networks'],
    logoLight: '/jhu-white-logo.png',  // White logo for dark mode
    logoDark: '/JHU-logo.png',         // Original logo for light mode
  },
  {
    institution: 'Texas Tech University',
    degree: 'Bachelor of Science in Computer Engineering',
    period: 'Graduated: May 2020',
    coursework: ['Embedded Systems', 'Electronics', 'Microprocessor Architecture', 'Digital Signal Processing', 'Machine Learning', 'Pattern Recognition'],
    logoLight: '/texas-tech-logo.png',           // Same logo for both modes
    logoDark: '/texas-tech-logo.png',            // Same logo for both modes
  },
  {
    institution: 'South Plains College',
    degree: 'Associate of Science in Pre-Engineering',
    period: 'Graduated: December 2017',
    coursework: ['Engineering Graphics (AutoCAD)', 'Fundamentals of Programming I (C++)', 'Fundamentals of Programming II (C++/OOP)', 'Calculus I, II, III', 'Differential Equations'],
    logoLight: '/spc-orange-logo.png',           // Orange logo for dark mode
    logoDark: '/spc-orange-logo.png',                   // Original logo for light mode
  },
];

const Education: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section id="education" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24">
      <h1 className="text-4xl font-bold mb-8">Education</h1>
      <div className="space-y-16">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start justify-between">
            <div className="sm:w-3/4 max-w-full">
              <h3 className="text-2xl font-bold">{edu.institution}</h3>
              <p className="text-lg">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>Relevant Coursework:</strong> {edu.coursework.join(', ')}</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-64 h-64 flex items-start justify-center ml-8">
              <Image
                src={darkMode ? edu.logoLight : edu.logoDark}
                alt={edu.institution}
                width={256}
                height={256}
                className=""
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
