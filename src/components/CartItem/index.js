import React from 'react';

const CartItem = props => {
  return (
    <div>
      <span>{props.cartItemId}</span>
      <span>{props.cartItemTitle}</span>
      <button type="button" onClick={(e) => props.removeItem(e, props.cartItemId)} value={props.cartItemId}>remove</button>
      {/* <span>{props.cartItemQuantity}</span> */}
      <input type="text" onChange={props.quantityInput} value={props.cartItemQuantity} />
      <span>{props.subTotal}</span>
    </div>
  )
}

export default CartItem;
