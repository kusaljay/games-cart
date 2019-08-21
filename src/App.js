import React, { Component } from 'react';
import Header from './components/Header';
import CardsList from './components/GameCardsList';
import Cart from './components/Cart';
import data from './api/data';
import './scss/global.scss';

class App extends Component {
  state = {
    games: data,
    //cart: [],
    //cartCount: 0
    cart: []
  }

  /* handleCartCount = () => {
    let cartCount = this.state.cartCount;
    cartCount++;
    this.setState({cartCount: cartCount});
  }
 */
  handleCartCount = (item) => {
    const cartCount = [...this.state.cart];
    const newCartCount = cartCount.concat(item);
    this.setState(() => {
      return {cart: newCartCount};
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
    //console.log(this.state.games);
    return (
      
      <div className="App">
        <Header cartCount={this.state.cart.length} />
        <CardsList games={this.state.games} handleCartCount={this.handleCartCount} />
        {/* <CardsList games={this.state.games} handleAddToCart={this.handleAddToCart} /> */}
        <Cart games={this.state.games} cart={this.state.cart} />

      </div>
      
    );
    
  }

  
}

export default App;
