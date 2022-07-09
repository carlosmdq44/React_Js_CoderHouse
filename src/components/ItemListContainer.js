import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import getData from "../products";

const ItemListContainer = ({ greeting}) => {

    function onAddCallBack(n){
        alert(`agregados ${n} productos `);
    }

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("products: ", products);

    useEffect(() => {
        const getProducts = async () => {
          try {
            const response = await getData;
            setProducts(response);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        getProducts();
      }, []);
    

 return (
    <div>
     {greeting}
    <ItemCount 
       stock={5}
       initial={1} 
       onAdd = {onAddCallBack}
       />
      {loading ? (<h3>CARGANDO</h3>):(<ItemList items={products}/>)}    
    </div>
    );
};

export default ItemListContainer;