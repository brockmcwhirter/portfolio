'use client';
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen p-8 pt-24 ${darkMode ? 'bg-dark-background text-dark-text' : 'bg-background text-text'}`}
    >
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <div className="max-w-6xl">
        <p className="mt-4 text-lg indent-8">
          I&apos;m Macky Brock McWhirter, a dedicated software engineer with a passion for developing innovative applications. My expertise spans software engineering and machine learning, where I excel in creating and deploying sophisticated models.
        </p>
        <p className="mt-4 text-lg indent-8">
          I&apos;m currently pursuing a Master&apos;s degree in Electrical & Computer Engineering at Johns Hopkins University. My focus combines software engineering with machine learning and Digital Signal Processing (DSP), enabling me to integrate theoretical insights with practical solutions. Explore my portfolio to learn more about my professional experience, academic background, technical skills, and the projects I&apos;ve developed. I&apos;m excited to share my journey and showcase the work that defines my career.
        </p>

        <div className="mt-8">
          <p className="text-lg">
            Interested in a quick overview? View my resume below.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1I6pycIFp26E3hloy86wPBva1RvFjot1_?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold py-2 px-4 rounded transition duration-300 mt-4 ${darkMode ? 'bg-dark-buttonBg text-dark-buttonText hover:bg-dark-accent' : 'bg-buttonBg text-buttonText hover:bg-accent'}`}
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
