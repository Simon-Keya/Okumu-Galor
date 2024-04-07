import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            About Me
          </h1>
          <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-base">
            I am a passionate artist with a deep love for creating unique and expressive
            paintings. My work is influenced by a variety of sources, and I am constantly
            exploring new techniques and mediums to bring my visions to life.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 h-24 object-cover object-center w-full"
                src="https://source.unsplash.com/1600x900/?artist,portrait"
                alt="Artist" // Corrected alt text
              />
              <div className="p-4">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
                  Artist Name
                </h2>
                <p className="leading-loose text-gray-600">
                  A short bio about yourself and your artistic journey. You can
                  highlight your achievements, inspirations, or anything else that
                  makes your art unique.
                </p>
              </div>
            </div>
          </div>
          {/* Add more card elements here if needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
