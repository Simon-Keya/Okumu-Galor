import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-gray-500 p-2 bg-gray-200 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="ml-3 text-xl">FineArt</span>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">© {new Date().getFullYear()} OkumuGalor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
