// src/pages/index.tsx
import React from 'react';
import Navbar from '../app/components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <section id="home" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Hello from the index page!</h1>
        </section>
        <section id="about" className="min-h-screen bg-gray-200 p-8 pt-24">
          <h1 className="text-4xl font-bold">About</h1>
          <p>About me...</p>
        </section>
        <section id="experience" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Experience</h1>
          <p>My experience...</p>
        </section>
        <section id="education" className="min-h-screen bg-gray-200 p-8 pt-24">
          <h1 className="text-4xl font-bold">Education</h1>
          <p>My education...</p>
        </section>
        <section id="skills" className="min-h-screen bg-gray-100 p-8 pt-24">
          <h1 className="text-4xl font-bold">Skills</h1>
          <p>My skills...</p>
        </section>
        <section id="projects" className="min-h-screen bg-gray-200 p-8 pt-24">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p>My projects...</p>
        </section>
      </div>
    </div>
  );
};

export default Home;
