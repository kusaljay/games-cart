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

  handleAddToCart = (item) => {
    const cartCount = [...this.state.cart];
    const newCartCount = cartCount.concat(item);
    const cartTotalPrice = newCartCount.reduce((acc, item) => acc + item.priceSale, 0);
    // Cart Total items & Total Price
    this.setState({
      cart: newCartCount,
      total: cartTotalPrice
     });
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
        <GamesList games={this.state.games} handleAddToCart={this.handleAddToCart} />
        <Cart games={this.state.games} cart={this.state.cart} cartTotalPrice={this.state.total} />
      </div>
    );
    
  }

  
}

export default App;
