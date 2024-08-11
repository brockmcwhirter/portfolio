'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-dark-background text-light-text dark:text-dark-text py-8 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Brock McWhirter. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            All logos, trademarks, and brand names used on this website are the property of their respective owners, including but not limited to companies and universities.
          </p>
          <p className="mt-2 text-sm">
            This website is for personal use only and is not endorsed by, affiliated with, or sponsored by any of the companies or universities whose logos are displayed. The use of these logos is intended solely for identifying the companies and universities where I have gained experience or education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
