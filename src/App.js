import React, { Component } from 'react';
import Header from './components/Header';
import GamesList from './components/GamesList';
import Cart from './components/Cart';
import data from './api/data';
import './scss/global.scss';

class App extends Component {
  state = {
    games: data,
    //cart: [],
    //cartCount: 0
    cart: [],
    total: 0
  }

  calcTotalPrice(cartCount) {
    const cartTotalPrice = cartCount.reduce((acc, item) => acc + item.priceSale, 0);
    this.setState({
      total: cartTotalPrice
    });
  }

  handleAddToCart = (item) => {
    const cartCurrent = [...this.state.cart];
    const cartUpdated = cartCurrent.concat(item);
    this.setState({
      cart: cartUpdated
     });
     this.calcTotalPrice(cartUpdated);
  }

  handleRemoveFromCart = (e, itemId) => {
    e.preventDefault();
    const cartUpdated = [...this.state.cart];
    const itemIndex = cartUpdated.findIndex(obj => obj.id === itemId);
    cartUpdated.splice(itemIndex, 1);
    this.setState({
      cart: cartUpdated
    });
    this.calcTotalPrice(cartUpdated);
  }

  handleQuantityInput = (e, currentQuantity, itemId) => {
    e.preventDefault();
    //const quantityInput = e.target.value * 1;
    const cartItem =  this.state.cart.find(obj => obj.id === itemId);
    console.log(cartItem, currentQuantity);
    /* currentQuantity = 
    if (e.target.value > currentQuantity) {
      console.log('yes'); */
      

  }
  

/* 
  handleAddToCart = (game) => {
    let cartItem = this.state.cart.find(item => item.id === game.id);
    if(!cartItem) {
      this.setState({ cart: [...this.state.cart, game] });
    }
    console.log(game.id);
  } */

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.cart.length} />
        <GamesList games={this.state.games} addItem={this.handleAddToCart} />
        <Cart 
          games={this.state.games} 
          cart={this.state.cart} 
          cartTotalPrice={this.state.total}
          addItem={this.handleAddToCart}
          removeItem={this.handleRemoveFromCart}
          handleInput={this.handleQuantityInput} />
      </div>
    );
    
  }

  
}

export default App;
