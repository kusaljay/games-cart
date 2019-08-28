import React from 'react';
import Flex, { FlexItem } from 'styled-flex-component';

const Card = props => {
  const { title, 
          desc, 
          image, 
          priceOrig, 
          onSale, 
          priceSale } = props.gameInfo;
  
          //console.log(props.gameInfo);
  
  const addItem = () => {
    return props.addItem(props.gameInfo);
  }

  return (
    <Flex full column>
      <div>
        <img src={image} alt={title} />
        { onSale ? <span>on sale</span> : null }
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <FlexItem><hr /></FlexItem>
      <Flex justifyAround>
        <FlexItem>{priceSale}</FlexItem>
        <FlexItem>{ onSale ? `Was $${priceOrig}, save ${priceOrig - priceSale}`: null }</FlexItem>
      </Flex>
      <Flex justifyAround>
        <FlexItem>
          <button onClick={addItem}>Add to Cart</button>
        </FlexItem>
        <FlexItem>
          <button>Save to Wishlist</button>
        </FlexItem>
      </Flex>
    </Flex>
  );
}

export default Card;