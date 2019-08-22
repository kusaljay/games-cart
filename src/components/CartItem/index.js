import React from 'react';

const CartItem = () => {
  return (
    <div>
      <span>Game Name</span>
      <button type="button">remove</button>
      <input type="text" name="quantity" />
    </div>
  )
}

export default CartItem;
