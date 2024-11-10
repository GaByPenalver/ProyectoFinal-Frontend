import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
  return (
    <div className='navbar-h'>

      <Navbar expand="lg" className="navbar-home bg-body-succes">
        <Container className='navbar-ho'>
          
          <Navbar.Brand href="#home">Logo de la Tienda</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
           
              <Nav className="me-auto">

                <Link to="/registro">Registrarse</Link>
                <Link to="/iniciosesion">Iniciar Sesión</Link>
              </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarHome;