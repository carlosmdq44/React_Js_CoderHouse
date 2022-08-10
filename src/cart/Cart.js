import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartList from '../components/CartList/CartList';

function Cart() {

    const { cartList } = useContext(CartContext)

    return (
        <>
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5"><strong>There aren't products in your cart</strong></h3>
                        <h4 className="my-5">Would you like to add any product?</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/">
                        Press here to buy
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart;