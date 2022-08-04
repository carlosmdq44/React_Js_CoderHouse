import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import Badge from 'react-bootstrap/Badge';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    const { cartList, cartCounter } = useContext(CartContext)

    return (
        <>
            <FaShoppingCart size="1.5rem" color="white" className="position-relative" /> 
            {cartList.length === 0 
            ?
                <span></span>
            :
                <Badge pill bg="danger">{cartCounter()}</Badge>}
        </>
    )
}


export default CartWidget;