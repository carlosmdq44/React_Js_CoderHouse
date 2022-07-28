import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CarWidget from '../cart/CartWidget';

function NavBar() {
  return (
    <>
      <Nav className="justify-content-center bg-danger" activeKey="/home">
        <Nav.Item>
          <CarWidget></CarWidget>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Categories</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}


export default NavBar;