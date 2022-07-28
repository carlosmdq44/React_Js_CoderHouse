import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { Button , Card, Col, Row } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const Item = ({id, title, price, description, category, image}) => {

  const CartContextValue = useContext(CartContext);
  
    return (
      <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
             {price}
            </Card.Text>
            <Link  to={`/product/${id}`}> <button className="btn btn-primary" >Detalle</button></Link>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Item;

