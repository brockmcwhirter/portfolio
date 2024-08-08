// src/app/components/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const isSanityStudio = pathname.startsWith('/studio');

  return !isSanityStudio ? (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Brock McWhirter</div>
        <div className="space-x-4">
          <Link href="#home" className="text-white hover:text-gray-300">Home</Link>
          <Link href="#about" className="text-white hover:text-gray-300">About</Link>
          <Link href="#experience" className="text-white hover:text-gray-300">Experience</Link>
          <Link href="#education" className="text-white hover:text-gray-300">Education</Link>
          <Link href="#skills" className="text-white hover:text-gray-300">Skills</Link>
          <Link href="#projects" className="text-white hover:text-gray-300">Projects</Link>
        </div>
      </div>
    </nav>
  ) : null;
};

export default Navbar;
