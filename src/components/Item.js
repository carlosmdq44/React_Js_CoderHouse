import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Button , Card, Col, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Item = ({prod}) => {

  const CartContextValue = useContext(CartContext);
  
    return (
      <Row xs={1} md={2} className="g-4 mt-2">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
        <Card className='p-3' style={{ width: '18rem', border: '1px solid black', boxShadow: '20px 5px 5px black'}}>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
             {prod.price}
            </Card.Text>
            <div className='position-relative'>
            <Link  to={`/product/${prod.id}`}> <button className="btn btn-primary position-absolute top-50 start-50 translate-middle my-2" style={{width: '80%'}} >Detalle</button></Link>
            </div>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Item;

