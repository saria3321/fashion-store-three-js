import React from 'react';

const Card = ({ imageSrc, altText }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover" />
    </div>
  );
};

export default Card;
