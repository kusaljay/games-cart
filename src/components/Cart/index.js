import React, { Component } from 'react';
import CartItemsList from '../CartItemsList';

class Cart extends Component {
  state = {
    games: this.props.games,
    cart : []
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.setState({cart: this.props.cart});
    }
  }
/*   
  countCartItemQuantities() {
    const cartItems = this.state.cart;
    const quantities = cartItems
      .map(({id}) => id)
      .reduce((acc, id) => {
        const count = acc[id] || 0;
        acc[id] = count + 1;
        return acc;
      }, {}); 
    return quantities;
    //console.log(quantity);
  }
 */
  render() {
    //const uniqueItems = this.countCartItems();
    return (
      <div>
        <h2>Your Cart</h2>
        <CartItemsList cartItems={this.state.cart} />
        <h4>Total: ${this.props.cartTotalPrice}</h4>
      </div>
    );
  }
}

export default Cart;
