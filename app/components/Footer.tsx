'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary dark:bg-dark-background text-text dark:text-light-text py-8 px-4" role="contentinfo">
      <div className="max-w-screen-xl mx-auto text-center space-y-4">
        <p>&copy; {new Date().getFullYear()} Brock McWhirter. All Rights Reserved.</p>
        <p className="text-sm">
          All logos, trademarks, and brand names used on this website are the property of their respective owners, including but not limited to companies and universities.
        </p>
        <p className="text-sm">
          This website is for personal use only and is not endorsed by, affiliated with, or sponsored by any of the companies or universities whose logos are displayed. The use of these logos is intended solely for identifying the companies and universities where I have gained experience or education.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
