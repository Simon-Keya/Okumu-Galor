import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
        </button>
        <p className="text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 FineArt —
          <a href="mailto:contact@fineart.com" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">
            contact@fineart.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.facebook.com/fineart"
            className="text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="https://www.twitter.com/fineart"
            className="ml-3 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/fineart"
            className="ml-3 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width={20} height={20} x={2} y={2} rx={5} ry={5}></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1={17.5} y1={6.5} x2={17.51} y2={6.5}></line>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;