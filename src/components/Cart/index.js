import React, { Component } from 'react';
//import CartItemsList from '../CartItemsList';
import CartItem from '../CartItem';

class Cart extends Component {
  /* state = {
    games: this.props.games,
    cart : []
  } */

  componentDidUpdate() {
    /* if (this.props.cart !== prevProps.cart) {
      this.setState({cart: this.props.cart});
      
    } */
  }
    
  countCartItemQuantities() { 
    const quantities = this.props.cart
      .map(({title}) => title)
      .reduce((acc, title) => {
        const count = acc[title] || 0;
        acc[title] = count + 1;
        return acc;
      }, []); 
    
      return quantities;
  }

  renderCartItems() {
    /* Create the empty object 'quantities' to hold each unique game's quantity */
    const quantities = {};
    this.props.cart.forEach(el => {
      quantities[el.id] = ( quantities[el.id] || 0 ) + 1;
      quantities[el.title] = ( quantities[el.title]);
    })
    console.log(quantities);
    /*Pass in the 'quantities' object to keys() method of Object constructor.
      Obtain an array of keys in the quantities object i.e. names of the games.
      Chain the resulting array to map() method 
        and obtain a list of unique names of the games
        and pass them as a cartItemTitle prop */
    const cartItems = Object.keys(quantities).map((cartItemId, index) => {
    /* Use the game names (i.e keys in the object passed in i.e 'quantities')
        to obtain the numbers (i.e. values of 'quantities' object) */
      const cartItemQuantity = quantities[cartItemId];

      console.log(cartItemId);

      const cartItemTitle = this.props.cart.filter(ele => {
        if (ele.id === quantities[cartItemId]) {
          return ele.title;
        }
        return null;
      })
      

      return (
        <CartItem 
          key={index}
          cartItemId={cartItemId}
          cartItemTitle={cartItemTitle}
          cartItemQuantity={cartItemQuantity}
          removeItem={this.props.removeItem} />
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


      
