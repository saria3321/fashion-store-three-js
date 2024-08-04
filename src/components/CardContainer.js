import React from 'react';
import Card from './Card';

const CardContainer = () => {
  const cards = [
    { imageSrc: '/assets/images/still-life-rendering-jackets-display (1).jpg', altText: 'Image 1' },
    { imageSrc: '/assets/images/still-life-rendering-jackets-display.jpg', altText: 'Image 2' },
    { imageSrc: '/assets/images/still-life-rendering-jackets-display (2).jpg', altText: 'Image 3' },
    { imageSrc: '/assets/images/still-life.jpg', altText: 'Image 4' },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <Card key={index} imageSrc={card.imageSrc} altText={card.altText} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
