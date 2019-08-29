import React, { Component } from 'react';
//import CartItemsList from '../CartItemsList';
import CartItem from '../CartItem';

class Cart extends Component {

  renderCartItems() {
    const quantities = {};
    this.props.cart.forEach(el => {
      quantities[el.id] = ( quantities[el.id] || 0 ) + 1;
    })

    const cartItems = Object.keys(quantities).map((obj, index) => {

      const cartItemId = obj * 1;
      const cartItem =  this.props.cart.find(obj => obj.id === cartItemId) || {};
      const cartItemTitle = cartItem.title;
      const cartItemQuantity = quantities[cartItemId];
      const subTotal = (cartItem.priceSale) * cartItemQuantity;

      return (
        <CartItem 
          key={index}
          cartItemId={cartItemId}
          cartItemTitle={cartItemTitle}
          cartItemQuantity={cartItemQuantity}
          removeItem={this.props.removeItem}
          subTotal={subTotal} 
          quantityInput={this.props.handleInput} />
        );
    });

    return cartItems;
  }

  render() {
    const cartItemsList = this.renderCartItems();

    return (
      <div>
        <h2>Your Cart</h2>
        {cartItemsList}
        <h4>Total: ${this.props.cartTotalPrice}</h4>
      </div>
    );
  }
}

export default Cart;


      
