// src/app/components/Sidebar.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-primary dark:bg-dark-background p-4 z-10">
      <div className="flex flex-col items-center mt-16">
        <Image
          src="/linkedinprofile.jpg" // Ensure this path is correct
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <h2 className="text-light-text dark:text-dark-text text-2xl mt-4">Brock McWhirter</h2>
        <div className="flex items-center text-light-text dark:text-dark-text mt-2">
          <FaMapMarkerAlt className="mr-2" size={24} />
          <span>Lubbock, Texas</span>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-4">
          <a
            href="mailto:brock@brockmcwhirter.dev"
            className="text-secondary dark:text-accent hover:underline"
            title="Email"
            aria-label="Email"
          >
            <FaEnvelope size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/macky-brock-mcwhirter-2053b2159/"
            className="text-secondary dark:text-accent hover:underline"
            title="LinkedIn"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://github.com/brockmcwhirter"
            className="text-secondary dark:text-accent hover:underline"
            title="GitHub"
            aria-label="GitHub"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
