import React from 'react';
import '../styles/PaintingCard.css';

interface PaintingCardProps {
  image: string;
  title: string;
  description: string;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default PaintingCard;
