
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 mt-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">
            Developed by <strong>Bhuvan Shyam M</strong>
          </p>
          <p className="text-sm mb-2">
            Email: 
            <a 
              href="mailto:bhuvanshyam2022@gmail.com" 
              className="text-blue-400 hover:underline ml-1"
            >
              bhuvanshyam2022@gmail.com
            </a>
          </p>
          <p className="text-sm mb-2">
            LinkedIn: 
            <a 
              href="https://www.linkedin.com/in/bhuvanshyam/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline ml-1"
            >
              Bhuvan Shyam M
            </a>
          </p>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} Bhuvan Shyam M. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
