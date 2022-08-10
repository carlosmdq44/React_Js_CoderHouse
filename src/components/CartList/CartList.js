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
                            <tbody className='table' style={{backgroundColor: '#023c59'}}>
                            <tr>
                                <th>Image</th>
                                <th>Product name</th>
                                <th>Quantity</th>
                                <th>Price</th>
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
                <button className="btn btn-danger bg-gradient me-3" onClick={emptyCart}>Empty Cart</button>
                <Link to="/checkout">
                    <button className="btn btn-danger bg-gradient ms-3">Process Purchase</button>
                </Link>
                </div>
                    </div>
            </div>
        );
       }

export default CartList;