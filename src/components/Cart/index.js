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
    let total = cartItems.reduce((acc, item) => acc + item.priceSale, 0);
    //this.setState( {total: total});
    return total;
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

    return (
      <div>
        <h2>Your Cart</h2>
        <CartListItem />
        <h4>Total: {this.calcTotal()}</h4>
      </div>
    );
  }
}

export default Cart;
