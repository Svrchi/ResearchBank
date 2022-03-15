import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListContainer.css';

const ListContainer = ({ cache, loading }) => {
  const singleItems = cache.map((item, index) => {
    return <ListItem cache={item} key={index} />;
  });

  if (loading) {
    return <h2> loading... </h2>;
  }
  return <div className="list-container">{singleItems}</div>;
};

export default ListContainer;
