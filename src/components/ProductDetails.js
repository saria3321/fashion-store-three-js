import React from 'react';
import ThreeDModel from './ThreeDModel';

const ProductDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 md:p-8">
        <div className="flex-1 md:w-1/2 p-4 md:p-8">
          <ThreeDModel />
        </div>
        <div className="flex-1 md:w-1/2 p-4 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Stylish Jacket</h2>
          <p className="text-xl text-gray-700 mb-4">$199.99</p>
          <button className="bg-black text-white py-2 px-4 rounded mb-4">Add to Cart</button>
          <div className="border-t border-gray-200 pt-4 mt-4">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-700 mb-4">
              This stylish jacket is perfect for the modern individual. Made from high-quality materials, it is both durable and comfortable. Perfect for any occasion.
            </p>
            <h3 className="text-xl font-semibold mb-2">Material</h3>
            <p className="text-gray-700 mb-4">100% Polyester</p>
            <h3 className="text-xl font-semibold mb-2">Available Sizes</h3>
            <p className="text-gray-700">S, M, L, XL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
