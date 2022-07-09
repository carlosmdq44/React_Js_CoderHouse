import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import getData from "../products";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ greeting}) => {

    function onAddCallBack(n){
        alert(`agregados ${n} productos `);
    }

    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("products: ", product);

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
      {loading ? (<h3>CARGANDO</h3>):(<ItemDetail item={product[0]}/>)}    
    </div>
    );
};

export default ItemDetailContainer;