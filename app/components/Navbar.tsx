import React, { useEffect } from 'react';
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

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.altKey) && event.key === 'd') {
        event.preventDefault();
        toggleDarkMode();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [toggleDarkMode]);

  return !isSanityStudio ? (
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-dark-background p-4 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-1 justify-center space-x-16">
          <Link href="#home" aria-label="Home" className="text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Home</Link>
          <Link href="#experience" aria-label="Experience" className="text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Experience</Link>
          <Link href="#education" aria-label="Education" className="text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Education</Link>
          <Link href="#skills" aria-label="Skills" className="text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Skills</Link>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
          aria-pressed={darkMode}
          className="ml-auto flex items-center cursor-pointer focus:outline-none"
        >
          {darkMode ? (
            <FaSun className="text-yellow-500" size={24} />
          ) : (
            <FaMoon className="text-gray-300" size={24} />
          )}
        </button>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
