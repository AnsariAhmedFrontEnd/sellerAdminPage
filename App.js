import React, { useState } from 'react';
import Form from './Components/Form';
import Category from './Components/Category';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className='app'>
      <h1 className="app-title">Seller Admin Page</h1>
      <div className="app-container">
      <Form products={products} setProducts={setProducts} />
      <Category products={products} />
      </div>
    </div>
  );
};

export default App;
