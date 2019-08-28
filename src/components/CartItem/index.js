import React from 'react';

const CartItem = props => {
  return (
    <div>
      <span>{props.cartItemId}</span>
      <span>{props.cartItemTitle}</span>
      <button type="button" onClick={(ev) => props.removeItem(ev, props.cartItemId)} value={props.cartItemId}>remove</button>
      <span>{props.cartItemQuantity}</span>
      <input type="text" name="quantity" />
      <span>{props.subTotal}</span>
    </div>
  )
}

export default CartItem;
