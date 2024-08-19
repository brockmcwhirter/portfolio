'use client';
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const content = [
    "I'm Macky Brock McWhirter, a dedicated software engineer with a passion for developing innovative applications. My expertise spans software engineering and machine learning, where I excel in creating and deploying sophisticated models.",
    "I'm currently pursuing a Master's degree in Electrical & Computer Engineering at Johns Hopkins University. My focus combines software engineering with machine learning and Digital Signal Processing (DSP), enabling me to integrate theoretical insights with practical solutions. Explore my portfolio to learn more about my professional experience, academic background, technical skills, and the projects I’ve developed. I’m excited to share my journey and showcase the work that defines my career.",
  ];

  return (
    <section
      id="about"
      className={`min-h-screen p-8 pt-24 ${darkMode ? 'bg-dark-background text-light-text' : 'bg-primary text-text'}`}
    >
      <h2 className="text-4xl font-bold">Welcome!</h2>  {/* Changed to h2 for better semantic structure */}
      <div className="max-w-6xl">
        {content.map((paragraph, index) => (
          <p key={index} className="mt-4 text-lg indent-8">
            {paragraph}
          </p>
        ))}
        <div className="mt-8">
          <p className="text-lg">
            Interested in a quick overview? View my resume below.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1I6pycIFp26E3hloy86wPBva1RvFjot1_?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold py-2 px-4 rounded transition duration-300 mt-4 ${darkMode ? 'bg-dark-buttonBg text-dark-buttonText hover:bg-dark-accent' : 'bg-black text-white hover:bg-gray-800'}`}
            aria-label="View my resume on Google Drive in a new tab"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
