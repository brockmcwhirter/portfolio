// Skills.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// skillsData.ts
export const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['C# (.NET framework, WPF)', 'C', 'C++', 'React', 'Next', 'TypeScript', 'JavaScript', 'Java (Spring framework)', 'MATLAB', 'Python (Tensorflow, PyTorch)'],
  },
  {
    category: 'Tools and IDES',
    skills: ['Apollo GraphQL', 'Cmake', 'VSCode', 'Visual Studio', 'PyCharm', 'Postman', 'Insomnia'],
  },
  {
    category: 'Cloud',
    skills: ['AWS'],
  },
  {
    category: 'Databases',
    skills: ['MS SQL Server', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Command Line',
    skills: ['PowerShell', 'Bash', 'WSL (Windows Subsystem for Linux)'],
  },
];



const Skills: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="skills" className="min-h-screen bg-primary dark:bg-dark-background dark:text-light-text p-8 pt-24">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="space-y-4">
        {skillsData.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleCategory(item.category)}
              className="text-2xl font-semibold w-full text-left focus:outline-none focus:ring-2 focus:ring-secondary"
              aria-expanded={expandedCategory === item.category}
              aria-controls={`skills-${index}`}
            >
              {item.category}
            </button>
            <motion.ul
              initial={false}
              animate={{ height: expandedCategory === item.category ? 'auto' : 0 }}
              className="overflow-hidden list-disc list-inside ml-6 mt-2"
              id={`skills-${index}`}
              aria-hidden={expandedCategory !== item.category}
            >
              {item.skills.map((skill, i) => (
                <li key={i} className="text-lg">
                  {skill}
                </li>
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
