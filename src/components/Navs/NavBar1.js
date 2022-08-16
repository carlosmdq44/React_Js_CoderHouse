import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import reactLogo from '../Icons/logoP.png';

function NavBar1() {
  return (
    <Navbar expand="lg"  style={{backgroundColor: '#023c59', height: '60px' }}>
       <Nav.Item>
          <img 
          src={reactLogo}
          className="position-absolute top-0 start-0 mt-1 mx-5" 
          style={{
            width:'50px'
            }}></img>
        </Nav.Item>
      <Container fluid  >
          <Form className="d-flex mx-auto">
            <Form.Control 
              type="search"
              placeholder="Buscar productos, marcas, y más....."
              className="me-2 "
              style={{width:'500px'}}
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar1;