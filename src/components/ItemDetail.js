import React from 'react'
import Item from './Item';

const ItemDetail = ({ item }) => {
  console.log(item);
  return (
    <div>
      < Item {...item} />
    </div>
  );
};

export default ItemDetail;