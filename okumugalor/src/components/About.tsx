import React from 'react';
import '../styles/About.css';

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <div className="bg-gray-100 h-full rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 h-24 object-cover object-center w-full"
                src="https://source.unsplash.com/1600x900/?artist,portrait"
                alt="Artist Portrait"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="flex flex-col text-center sm:text-left md:text-left">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              About Me
            </h1>
            <p className="lg:w-full mx-auto leading-relaxed text-base">
              I am a passionate artist with a deep love for creating unique and expressive
              paintings. My work is influenced by a variety of sources, and I am constantly
              exploring new techniques and mediums to bring my visions to life.
            </p>
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
                  Okumu Clinton
                </h2>
                <p className="leading-loose text-gray-600">
                  Artist
                  <br />
                  Painting is my passion.
                  <br />
                  I see beauty in all things,
                  <br />
                  and I paint what I see.
                  <br />
                  I have been painting for 15 years.
                  <br />
                  My preferred medium is oil, but I also appreciate the subtleties of watercolors.
                  <br />
                  In the past five years, I've dabbled in sketching and drawing.
                </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
