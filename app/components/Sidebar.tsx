'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-64 bg-primary dark:bg-dark-background p-4 z-10"
      aria-labelledby="sidebar-title"
    >
      <div className="flex flex-col items-center mt-16">
        <Image
          src="/linkedinprofile.jpg"
          alt="Brock McWhirter's Profile Picture"
          width={150}
          height={150}
          className="rounded-full bg-transparent"
        />
        <h2 id="sidebar-title" className="text-2xl mt-4 text-text dark:text-light-text bg-transparent">
          Brock McWhirter
        </h2>
        <div className="flex items-center text-text dark:text-light-text mt-2">
          <FaMapMarkerAlt className="mr-2 icon" size={24} />
          <span className="bg-transparent">Lubbock, Texas</span>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-4">
          <a
            href="mailto:brock@brockmcwhirter.dev"
            className="hover:underline bg-transparent icon"
            title="Email"
            aria-label="Send an Email to Brock McWhirter"
          >
            <FaEnvelope size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/macky-brock-mcwhirter-2053b2159/"
            className="hover:underline bg-transparent icon"
            title="LinkedIn"
            aria-label="Visit Brock McWhirter's LinkedIn Profile"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://github.com/brockmcwhirter"
            className="hover:underline bg-transparent icon"
            title="GitHub"
            aria-label="Visit Brock McWhirter's GitHub Profile"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
