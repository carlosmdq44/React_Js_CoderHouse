import React, {useState, useEffect} from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import products from "../products.json"

const promesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const resultado = <ItemList/>
        resolve=(resultado);
    }, 2000)
})

promesa.then((parametro)=>{
    document.getElementById("test").innerHTML = parametro;
})

const ItemListContainer = ({ greeting}) => {

    function onAddCallBack(n){
        alert(`agregados ${n} productos `);
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(setLoading, 2000, false);
        console.log('useEffect');
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