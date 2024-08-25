import React from 'react';
import Image from 'next/image';

const educationData = [
  {
    institution: 'Johns Hopkins University',
    degree: 'Master of Science in Electrical & Computer Engineering',
    period: 'In Progress',
    coursework: [
      'Machine Learning using Signal Processing',
      'Cloud Computing (AWS)',
      'Digital Signal Processing',
      'Computer Graphics (C++/OpenGL)',
      'Deep Neural Networks (Python/TensorFlow)',
    ],
    logoLight: '/jhu-white-logo.png',
    logoDark: '/JHU-logo.png',
  },
  {
    institution: 'Texas Tech University',
    degree: 'Bachelor of Science in Computer Engineering',
    period: 'Graduated: May 2020',
    coursework: [
      'Embedded Systems',
      'Electronics',
      'Microprocessor Architecture',
      'Digital Signal Processing',
      'Machine Learning',
      'Pattern Recognition',
    ],
    logoLight: '/texas-tech-logo.png',
    logoDark: '/texas-tech-logo.png',
  },
  {
    institution: 'South Plains College',
    degree: 'Associate of Science in Pre-Engineering',
    period: 'Graduated: December 2017',
    coursework: [
      'Engineering Graphics (AutoCAD)',
      'Fundamentals of Programming I & II (C++)',
      'Calculus I-III',
      'Differential Equations',
    ],
    logoLight: '/spc-orange-logo.png',
    logoDark: '/spc-orange-logo.png',
  },
];

const Education: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section
      id="education"
      className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24 scroll-mt-3"
    >
      <h2 className="text-4xl font-bold mb-8">Education</h2>
      <div className="space-y-16">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start justify-between"
          >
            <div className="sm:w-3/4 max-w-full">
              <h3 className="text-2xl font-bold" id={`edu-${index}`}>
                {edu.institution}
              </h3>
              <p className="text-lg">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
              <ul
                className="list-disc list-inside mt-4 space-y-2"
                aria-labelledby={`edu-${index}`}
              >
                <li>
                  <strong>Relevant Coursework:</strong>{' '}
                  {edu.coursework.join(', ')}
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-64 h-64 flex items-start justify-center mt-4 sm:mt-0 ml-0 sm:ml-8">
              <Image
                src={darkMode ? edu.logoLight : edu.logoDark}
                alt={`${edu.institution} logo`}
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

export default Education;
