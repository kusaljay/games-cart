import React, { Component } from 'react';
import CartListItem from '../CartListItem';

class Cart extends Component {
  state = {
    games: this.props.games,
    cart : [],
    total: 0
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart !== prevProps.cart) {
      this.setState({cart: this.props.cart})
    }
  }

  calcTotal = () => {
    const cartItems = this.state.cart;
    const cartTotal = cartItems.reduce((acc, item) => acc + item.priceSale, 0);
    this.setState( {total: cartTotal});
    //return total;
  }

  countCartItems = () => {
    const cartItems = this.state.cart;
    const frequency = cartItems
      .map(({id}) => id)
      .reduce((ids, id) => {
        const count = ids[id] || 0;
        ids[id] = count + 1;
        return ids;
      }, {}); 
      
      console.log(frequency);
  }

  render() {
    const cartTotal = this.state.cart.reduce((acc, item) => acc + item.priceSale, 0);
    //console.log(cartTotal)
    //const cartTotal = this.calcTotal();
    

    return (
      <div>
        <h2>Your Cart</h2>
        <CartListItem />
        <h4>Total: {cartTotal}</h4>
      </div>
    );
  }
}

export default Cart;
