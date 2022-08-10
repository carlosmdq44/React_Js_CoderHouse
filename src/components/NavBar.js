import Nav from 'react-bootstrap/Nav';
import CarWidget from '../cart/CartWidget';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar({cartCount}) {
  return (
    <>
      <Nav className="justify-content-center position-relative" style={{backgroundColor: '#023c59', height: '50px' }} activeKey="/home">
        <Nav.Item className='position-absolute top-0 end-0 px-2'>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/men's clothing">Men's clothing</NavDropdown.Item>
              <NavDropdown.Item href="/category/women's clothing">Women's clothing</NavDropdown.Item>
              <NavDropdown.Item href="/category/jewelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item href="/category/electronics">Electronics</NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='text-white' href="/Contact">Contact</Nav.Link>
        </Nav.Item>
        <Link className="cart-mobile" style={{paddingRight:'2rem' , paddingTop:'4px'}} to="/cart">
                        <CarWidget cartCount={cartCount} />
         </Link> 
      </Nav>
    </>
  );
}


export default NavBar;