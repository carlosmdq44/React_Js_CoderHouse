import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Button , Card, Col, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Item = ({prod}) => {

  const CartContextValue = useContext(CartContext);

  return (

      <Card className='p-4 m-4' style={{ width: '25%', border: '1px solid black', boxShadow: '20px 5px 5px black' , justifyContent:'space-between'}}>
      <Card.Img variant="top" src={prod.image} style={{height:'100%'}} /> 
      <Card.Body>
        <Card.Title className='text-center' >{prod.title}</Card.Title>
        <Card.Text className='text-center'>
        ${prod.price}
        </Card.Text>
        <div className='position-relative'>
            <Link  to={`/product/${prod.id}`}> <button className="btn btn-danger position-absolute top-50 start-50 translate-middle my-2" style={{width: '80%'}} >Detail</button></Link>
        </div>
      </Card.Body>                                               
    </Card>
  );
}
export default Item;

