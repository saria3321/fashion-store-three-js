import React from 'react';
import { FaSearch, FaBolt, FaUser, FaShoppingBag } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between bg-white p-4 shadow-md mb-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Fashion Store</h1>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
        <div className="relative flex items-center w-full md:w-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-l-full px-4 py-2 w-full md:w-auto focus:outline-none"
            placeholder="SEARCH PRODUCT OR BRAND"
          />
          <button className="bg-black text-white px-4 py-2 rounded-r-full">
            <FaSearch />
          </button>
        </div>
        <div className="flex space-x-4">
          <FaBolt className="text-2xl cursor-pointer" />
          <FaUser className="text-2xl cursor-pointer" />
          <FaShoppingBag className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
