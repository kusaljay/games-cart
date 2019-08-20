import React, { Component } from 'react';
import Header from './components/Header';
import CardsList from './components/CardsList';
import Cart from './components/Cart';
import data from './api/data';
import './scss/global.scss';

class App extends Component {
  state = {
    games: data
  }

  render() {
    //console.log(this.state.games);
    return (
      
      <div className="App">
        <Header />
        <CardsList games={this.state.games} />
        <Cart />

      </div>
      
    );
    
  }

  
}

export default App;
