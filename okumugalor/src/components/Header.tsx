import React from 'react';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div>
            <a href="/" className="flex items-center text-gray-800 text-2xl font-bold">
              <img src="/logo.png" alt="Fine Art Portfolio" className="w-8 h-8 mr-2" />
              Fine Art Portfolio
            </a>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <a href="#gallery" className="text-gray-500 hover:text-gray-600 px-3 py-2">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-500 hover:text-gray-600 px-3 py-2">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-500 hover:text-gray-600 px-3 py-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
