import React from 'react';
import Game from '../Game';

const GamesList = props => {
  const content = props.games.map((game, index) => {
    return <Game key={index} gameInfo={game} handleAddToCart={props.handleAddToCart} />
  });

  return (
    <div>
      {content}
    </div>
    
  )
}

export default GamesList;
