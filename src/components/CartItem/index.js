import React from 'react';

const CartItem = props => {
  return (
    <div>
      <span>{props.cartItemTitle}</span>
      <button type="button">remove</button>
      <span>{props.cartItemQuantity}</span>
      <input type="text" name="quantity" />
    </div>
  )
}

export default CartItem;
