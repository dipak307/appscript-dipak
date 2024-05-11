// Cart.js

import React from 'react';
import "./Cart.css"
const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart">
      
      {cartItems.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => onRemoveFromCart(item)}>Remove</button>
            
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
