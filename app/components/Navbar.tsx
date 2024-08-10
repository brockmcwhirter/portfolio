'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon } from 'react-icons/fa';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const pathname = usePathname();
  const isSanityStudio = pathname.startsWith('/studio');

  return !isSanityStudio ? (
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-dark-background p-4 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex justify-center space-x-4">
          <Link href="#home" className="text-light-text dark:text-dark-text hover:text-secondary dark:hover:text-accent">Home</Link>
          <Link href="#experience" className="text-light-text dark:text-dark-text hover:text-secondary dark:hover:text-accent">Experience</Link>
          <Link href="#education" className="text-light-text dark:text-dark-text hover:text-secondary dark:hover:text-accent">Education</Link>
          <Link href="#skills" className="text-light-text dark:text-dark-text hover:text-secondary dark:hover:text-accent">Skills</Link>
          <Link href="#projects" className="text-light-text dark:text-dark-text hover:text-secondary dark:hover:text-accent">Projects</Link>
        </div>
        <div className="flex items-center ml-auto cursor-pointer" onClick={toggleDarkMode}>
          {darkMode ? (
            <FaSun className="text-yellow-500" size={24} />
          ) : (
            <FaMoon className="text-gray-300" size={24} />
          )}
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
