'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 md:hidden focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <FaBars size={24} />
      </button>

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-primary dark:bg-dark-background p-4 z-20 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:block`}
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
            <FaMapMarkerAlt className="mr-2 text-text dark:text-light-text" size={24} />
            <span className="bg-transparent">Lubbock, Texas</span>
          </div>
          <div className="mt-4 flex flex-col items-center space-y-4">
            <a
              href="mailto:brock@brockmcwhirter.dev"
              className="hover:underline bg-transparent"
              title="Email"
              aria-label="Send an Email to Brock McWhirter"
            >
              <FaEnvelope className="text-text dark:text-light-text" size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/macky-brock-mcwhirter-2053b2159/"
              className="hover:underline bg-transparent"
              title="LinkedIn"
              aria-label="Visit Brock McWhirter's LinkedIn Profile"
            >
              <FaLinkedin className="text-text dark:text-light-text" size={50} />
            </a>
            <a
              href="https://github.com/brockmcwhirter"
              className="hover:underline bg-transparent"
              title="GitHub"
              aria-label="Visit Brock McWhirter's GitHub Profile"
            >
              <FaGithub className="text-text dark:text-light-text" size={50} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
