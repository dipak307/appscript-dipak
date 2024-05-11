import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import ProductContent from './product/ProductContent';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className='App'>
        <MainContent />
        <div className="product-discovery">
          <h1>Discover our Products</h1>
          <p>Welcome to our product page where you can see new product here choose your favorite product !</p>
          <div className="columns">
            <div className='two'>
              <ProductContent searchTerm={searchTerm} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
