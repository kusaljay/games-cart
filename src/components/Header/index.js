import React from 'react';
//import { Grid, GridItem } from 'styled-grid-component';

const Header = props => {
  return(
    <div>
      <h1>Header</h1>
      <span>{ props.cartCount > 0 ? props.cartCount : null }</span>
    </div>
  );
}

export default Header;