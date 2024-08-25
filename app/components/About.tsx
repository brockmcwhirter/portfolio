'use client';
import React from 'react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const content = [
    "I'm Macky Brock McWhirter, a passionate software engineer with a focus on developing innovative applications. My expertise lies in software engineering and machine learning, where I specialize in creating and deploying advanced models.",
    "Currently, I'm pursuing a Master's degree in Electrical & Computer Engineering at Johns Hopkins University. My studies are centered around integrating software engineering with machine learning and Digital Signal Processing (DSP). This combination allows me to apply theoretical knowledge to practical solutions. Through this portfolio, you can explore my professional experience, academic background, and the technical skills that define my career journey.",
  ];

  return (
    <section
      id="about"
      className={`min-h-screen bg-primary dark:bg-dark-background text-text dark:text-light-text p-8 pt-24 scroll-mt-3`}
    >
      <div className="space-y-16">
        <div className="flex flex-col sm:flex-row items-start justify-between">
          <div className="sm:w-3/4 max-w-full">
            <h2 className="text-4xl font-bold">Welcome!</h2>
            <div className="mt-8 space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg indent-4 sm:indent-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-base sm:text-lg">
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
        </div>
      </div>
    </section>
  );
};

export default About;
