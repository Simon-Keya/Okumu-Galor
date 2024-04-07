import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
