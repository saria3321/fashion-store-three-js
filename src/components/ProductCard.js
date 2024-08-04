import React from 'react';
import ThreeDModel from './ThreeDModel';

const ProductCard = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 md:p-8">
      <div className="flex-1 md:w-1/2 p-4 md:p-8">
        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
          <ThreeDModel />
        </div>
      </div>
      <div className="flex-1 md:w-1/2 p-4 md:p-8">
        <h2 className="text-2xl font-bold mb-4">Jimmy Choo Blossom</h2>
        <p className="text-xl text-gray-700 mb-4">£51.99</p>
        <button className="bg-black text-white py-2 px-4 rounded mb-4">Add to Bag</button>
        <div className="border-t border-gray-200 pt-4 mt-4">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p className="text-gray-700 mb-4">
            Jimmy Choo Blossom is a bold bouquet for bright young party girls. Sparkling and vivacious, it’s the sip of a first cocktail, the clinking of glasses and the glam of getting dressed to the nines. The floral fragrance opens with bright and sparkling top notes of red berries blended with a citrus cocktail. A delicate heart of sweet peas and rose can be found in the scent and sensual base notes of white musk and sandalwood.
          </p>
          <h3 className="text-xl font-semibold mb-2">Fragrance Type</h3>
          <p className="text-gray-700 mb-4">Floral</p>
          <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
          <p className="text-gray-700">
            - Top notes: Citrus, Red Berries, Raspberry<br />
            - Middle notes: Sweet Pea, Rose
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
