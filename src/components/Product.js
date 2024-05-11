// Product.js

import React, { useState } from 'react';
import "./Product.css";
import { FaHeart } from 'react-icons/fa';
const Product = ({ product, onAddToCart }) => {
  const { id, title, price, image } = product;

  const [heart,setHeart]=useState(true); 
  
  return (
    <div className="product">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      <div className='heart' onClick={()=>setHeart(!heart)} >
      { heart ?
    ( <p><FaHeart/></p>):(<p><FaHeart color="red"/></p>)

      }
      </div>
    </div>
  );
}

export default Product;
