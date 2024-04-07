import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="text-gray-600 body-font" id="contact">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Me
          </h1>
          <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-base">
            Feel free to reach out to me for any inquiries, commissions, or collaborations.
            I'd love to hear from you!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  EMAIL
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  jane.doe@example.com
                </h1>
                <p className="leading-relaxed mb-5">
                  I check my email regularly and will respond to you as soon as possible.
                </p>
                <a
                  href="mailto:jane.doe@example.com"
                  className="inline-flex items-center text-indigo-500 hover:text-gray-900"
                >
                  Send a message
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  PHONE
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  (123) 456-7890
                </h1>
                <p className="leading-relaxed mb-5">
                  Please leave a message if I don't pick up, and I'll get back to you as soon
                  as possible.
                </p>
                <a
                  href="tel:+11234567890"
                  className="inline-flex items-center text-indigo-500 hover:text-gray-900"
                >
                  Give me a call
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  SOCIAL
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  @jane.doe
                </h1>
                <p className="leading-relaxed mb-5">
                  Follow me on social media for updates on my latest work, exhibitions,
                  and more.
                </p>
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
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </a>
                  <a
                    href="https://www.facebook.com/jane.doe"
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;