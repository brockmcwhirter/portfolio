import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

interface NavbarProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, darkMode }) => {
  const pathname = usePathname();
  const isSanityStudio = pathname.startsWith('/studio');
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return !isSanityStudio ? (
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-dark-background p-4 z-30">
      <div className="container mx-auto flex items-center justify-between">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <FaBars size={24} />
        </button>

        {/* Navbar Links */}
        <div className={`flex-1 justify-center md:flex ${menuOpen ? 'block' : 'hidden'} md:space-x-16 md:block`}>
          <Link href="#home" aria-label="Home" className="block md:inline-block text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Home</Link>
          <Link href="#experience" aria-label="Experience" className="block md:inline-block text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Experience</Link>
          <Link href="#education" aria-label="Education" className="block md:inline-block text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Education</Link>
          <Link href="#skills" aria-label="Skills" className="block md:inline-block text-text dark:text-light-text hover:text-secondary dark:hover:text-accent">Skills</Link>
        </div>

        {/* Dark Mode Toggle */}
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
