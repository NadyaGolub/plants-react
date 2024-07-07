import React from 'react';
import PropTypes from "prop-types";
import { TiShoppingCart } from "react-icons/ti";
import { Box, Button, Color, Container, Image, Price } from './Card.styled';

export const Card = ({ item: {id, quantity, price, desc, title, img }, onDelete }) => {

  return (
    <Container >
      
      <Image src={img} alt={title}  />
          <h2>{title}</h2>
          <div >
        <p>{desc}</p>
        {quantity === 0 && (<Color>Товар відсутній</Color>)}
        
        <Box>
        <Price>{price} грн/шт</Price>
          <Button>Купити 

          <TiShoppingCart size="20"/></Button>
          </Box>
              
        <div>
          <button onClick={() => onDelete(id)}>Delete</button>
              </div>
              
              </div>
    </Container>
  );
};

Card.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    category: PropTypes.oneOf(['flowers', 'tree', 'brush' ]).isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    }).isRequired,
  onDelete: PropTypes.func.isRequired
}