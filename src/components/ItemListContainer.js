import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({ greeting}) => {

    function onAddCallBack(n){
        alert(`agregados ${n} productos `);
    }

    return (
    <div>
     {greeting}
    <ItemCount 
       stock={5}
       initial={1} 
       onAdd = {onAddCallBack}
       />
    </div>
    );
};

export default ItemListContainer;