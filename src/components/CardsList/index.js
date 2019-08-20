import React from 'react';
import Card from '../Card';

const CardsList = ({ games }) => {
  const content = games.map((game) => {
      return (
        <Card gameInfo={game} />
      );
    }
  );


  return (
    <div>
      {content}
    </div>
    
  )
}

export default CardsList;
