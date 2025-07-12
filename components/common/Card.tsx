import React from 'react';

export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  price?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        {price && <p className="text-gray-800 font-bold">{price}</p>}
      </div>
    </div>
  );
};

export default Card;
