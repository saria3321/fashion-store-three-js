import React from 'react';
import Header from './components/Header';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Header />
      <ProductDetails />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
