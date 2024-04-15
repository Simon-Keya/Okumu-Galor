import React from 'react';
import '../styles/Home.css';

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <div id={id} className="relative bg-cover bg-no-repeat h-screen">
      <div className="bg-gradient-to-r from-green-500 via-green-700 to-green-900 absolute top-0 left-0 h-full w-full bg-opacity-75">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                FINE ARTS
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                PORTFOLIO
              </h2>
              <h3 className="text-xl md:text-2xl mb-4">
                OKUMU CLINTON 
              </h3>
              <h4 className="text-lg md:text-xl">
                PAINTER FINE ARTS PORTFOLIO
              </h4>
            </div>
            <div>
              <img
                src="/assets/Art.jpg" 
                alt="Okumu Galor"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
