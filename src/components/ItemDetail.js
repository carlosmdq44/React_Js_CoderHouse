import React,{useState, useContext} from 'react';
import ItemCount from '../components/ItemCount';
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";

function ItemDetail({product}) {

    const [goToCart, setGoToCart] = useState(false)

    const { addToCart } = useContext(CartContext)

    // Agregar al carrito
    const onAdd = (quantity) => {
        setGoToCart(true)
        addToCart({...product, quantity: quantity})
    }

    return (
        <div key={product.id} className="container mt-5">
            <div className="row justify-content-center text-center align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 pb-5">  
                    <img src={product.image} className="itemDetail-img"  width="100%" height="100%"></img>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h3 className="fw-bold">{product.title}</h3>
                    <h4>${product.price}</h4>
                    <p>{product.description}</p>
                    <h5>Stock: {product.stock}</h5>

                    {!goToCart 
                    ? 
                        <ItemCount initial={1} max={product.stock} onAdd={onAdd} /> 
                    : 
                        <div className="d-flex justify-content-center">
                            <Link to={`/cart`}> 
                                <button className="btn btn-danger bg-gradient me-3 mt-3">Go to cart</button>
                            </Link>
                            <Link to={`/`}> 
                                <button className="btn btn-danger bg-gradient ms-3 mt-3">Keep buying</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default ItemDetail;