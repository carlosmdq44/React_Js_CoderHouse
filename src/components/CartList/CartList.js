import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartList = () => {

    const { cartList, totalBuy, removeItem, emptyCart } = useContext(CartContext)
        return (
            <div style={{ display: 'flex', justifyContent: 'center',margin: 'auto', color: 'black' }}>
                     <div>
                        <table className="table" >
                            <tbody className='table-dark'>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre del Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                            </tr>
                            </tbody>
                    {cartList.map(item => 
                            <tr>
                                <td><img src={item.image} style={{width:150}}></img></td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>${item.quantity * item.price}</td>
                            </tr>
                        )}
                        </table>
                        <h4 className="text-center"><b>${totalBuy()}</b></h4>
                <div className="d-flex justify-content-center mt-5">
                <button className="btn btn-danger bg-gradient me-3" onClick={emptyCart}>Vaciar Carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-danger bg-gradient ms-3">Procesar Compra</button>
                </Link>
                </div>
                    </div>
            </div>
        );
       }

export default CartList;