import React from 'react';
import CartItem from '../CartItem';

const CartListItems = props => {
  /* const countCartItemQuantities = () => {
    const cartItems = props.cartItems;
    const quantities = cartItems
      .map(({id}) => id)
      .reduce((acc, id) => {
        const count = acc[id] || 0;
        acc[id] = count + 1;
        return acc;
      }, {}); 
    return quantities;
    
  } */

  const cartItems = props.cartItems;
  console.log(cartItems);



  //console.log(countCartItemQuantities());
  /*
  quantities.map((item, index) => {
    return <CartItem key={index} itemId={item} />
  }); */
  return (
    <CartItem />
  )
}

export default CartListItems;
