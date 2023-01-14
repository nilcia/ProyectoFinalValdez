import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CardWidget from '../CardWidget/CardWidget';
import { Link } from 'react-router-dom';

//Navbar del Manu
const NavbarMenu = () => {

  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding: "0px"}}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" style={{textDecoration:"none", color:"#28B463"}}>ñañotysucus</Link>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link style={{textDecoration:"none"}} to="/category/1"><Nav.Link href="#echecerias" >Echeverias</Nav.Link></Link>
              <Link style={{textDecoration:"none"}} to="/category/2"><Nav.Link href="#cactus" >Cactus</Nav.Link></Link>
            </Nav>
            <Nav>
              <Nav.Link href="#cart">
                <CardWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;