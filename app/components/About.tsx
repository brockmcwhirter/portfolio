import React, { useState, useEffect } from 'react';



const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (

    <section id="home" className="min-h-screen bg-background dark:bg-dark-background dark:text-light-text p-8 pt-24">
      <h1 className="text-4xl font-bold">Welcome!</h1>
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
  );
};

export default About;