// src/pages/index.tsx
import React from 'react';
import Navbar from '../app/components/Navbar';
import Sidebar from '../app/components/Sidebar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="pl-64 ">
        <section id="home" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Welcome!</h1>
          <p className="mt-4 text-lg">
            My name is Macky Brock McWhirter. I am a passionate technologist with a solid foundation in software engineering. I specialize in creating sophisticated software applications. I have a strong proficiency in machine learning, allowing me to construct and deploy complex models for various applications. Currently, I am pursuing a Master's degree in Electrical & Computer Engineering at Johns Hopkins University. My studies focus on an integrative approach that combines software engineering, machine learning, and Digital Signal Processing (DSP). This unique blend of disciplines enables me to merge theoretical insights with practical applications, preparing me for the challenges of these rapidly evolving fields. Welcome to my portfolio, where you can explore my work experience, educational background, technical skills, and projects that I have developed.
          </p>
          <p className="mt-4 text-lg">
            Just want to download a resume? <a href="/MackyMcWhirterResume.pdf" download className="text-blue-500 hover:underline">Click here</a>
          </p>
        </section>
        <section id="experience" className="min-h-screen bg-gray-200 p-8 pt-24">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p>My experience...</p>
        </section>
        <section id="education" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Education</h1>
          <p>My education...</p>
        </section>
        <section id="skills" className="min-h-screen bg-gray-200 p-8 pt-24">
          <h1 className="text-4xl font-bold">Skills</h1>
          <p>My skills...</p>
        </section>
        <section id="projects" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>My projects...</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
