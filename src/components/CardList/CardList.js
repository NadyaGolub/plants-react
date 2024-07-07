import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card';
import { List, ListItem } from './CardList.styled';

export const CardList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Card item={item} onDelete={ onDelete} />
        </ListItem>
      ))}
    </List>
  );
};

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
