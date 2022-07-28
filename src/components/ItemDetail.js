import React, {useState, useContext} from 'react'
import Item from './Item';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';
import {Link} from "react-router-dom";

const ItemDetail = ({ item }) => {

  const [goToCart, setGoToCart] = useState(false)

  const { addToCart } = useContext(CartContext)

  // Agregar al carrito
  const onAdd = (quantity) => {
      setGoToCart(true)
      addToCart({...item, quantity: quantity})
  }  
  
 return (
      <div key={item.id} className="container mt-5">
          <div className="row justify-content-center text-center align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 pb-5">  
                  <img src={item.img} className="itemDetail-img"></img>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <h3 className="fw-bold">{item.name}</h3>
                  <h4>${item.price}</h4>
                  <p>{item.description}</p>
                  <h5>Stock: {item.stock}</h5>

                  {!goToCart 
                  ? 
                      <ItemCount initial={1} max={item.stock} onAdd={onAdd} /> 
                  : 
                      <div className="d-flex justify-content-center">
                          <Link to={`/cart`}> 
                              <button className="btn btn-danger bg-gradient me-3 mt-3">Ir al carrito</button>
                          </Link>
                          <Link to={`/`}> 
                              <button className="btn btn-danger bg-gradient ms-3 mt-3">Seguir comprando</button>
                          </Link>
                      </div>
                  }
              </div>
          </div>
      </div>
  )
}

export default ItemDetail;