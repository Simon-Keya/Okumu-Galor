import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center mt-8">
            <h2 className="text-white text-xl font-bold mb-4 sm:mb-0">
              Contact Information
            </h2>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-10 text-left">
            <div className="mb-10 px-4 w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-gray-500 font-bold mb-3">Email</h3>
              <p className="mb-5">jane.doe@example.com</p>
            </div>
            <div className="mb-10 px-4 w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-gray-500 font-bold mb-3">Phone</h3>
              <p className="mb-5">(123) 456-7890</p>
            </div>
            <div className="mb-10 px-4 w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-gray-500 font-bold mb-3">Address</h3>
              <p className="mb-5">
                123 Main Street <br />
                City, State 12345
              </p>
            </div>
            <div className="mb-10 px-4 w-full md:w-1/2 lg:w-1/3">
              <h3 className="text-gray-500 font-bold mb-3">Social Media</h3>
              <div className="flex items-center flex-wrap">
                <a
                  href="https://www.instagram.com/jane.doe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
                <a
                  href="https://www.twitter.com/jane.doe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ml-4"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 22-11a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;