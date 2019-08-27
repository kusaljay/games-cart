import React from 'react';

const CartItem = props => {
  return (
    <div>
      <span>{props.cartItemId}</span>
      <span>{props.cartItemTitle}</span>
      <button type="button" onClick={props.removeItem}>remove</button>
      <span>{props.cartItemQuantity}</span>
      <input type="text" name="quantity" />
    </div>
  )
}

export default CartItem;
