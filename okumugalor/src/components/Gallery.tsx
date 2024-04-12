import React from 'react';
import PaintingCard from './PaintingCard';
import '../styles/Gallery.css'

const Gallery: React.FC = () => {
  return (
    <section className="text-gray-600 body-font" id="gallery">
      <div className="container px-5 py-8 mx-auto">
        <h2 className="text-3xl font-bold mb-8">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 1"
            description="Description for painting 1"
          />
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 2"
            description="Description for painting 2"
          />
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 3"
            description="Description for painting 3"
          />
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 4"
            description="Description for painting 4"
          />
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 5"
            description="Description for painting 5"
          />
          <PaintingCard
            image="https://source.unsplash.com/1600x900/?art,painting"
            title="Painting 6"
            description="Description for painting 6"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
