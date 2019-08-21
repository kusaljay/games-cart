import React from 'react';
import Card from '../GameCard';

const CardsList = props => {
  const content = props.games.map((game, index) => {
      return <Card key={index} gameInfo={game} handleCartCount={props.handleCartCount} />
    }
  );


  return (
    <div>
      {content}
    </div>
    
  )
}

export default CardsList;
