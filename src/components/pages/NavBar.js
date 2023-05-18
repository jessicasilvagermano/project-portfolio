import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';




function NavBar() {
  return (
    <Navbar className='mx-2 p-3 fixed' collapseOnSelect expand="lg" variant="ligth" >
      <Container className='responsive-navbar-nav d-flex p-2 justify-content-between'>
        <Navbar.Brand  as={Link} to="/" ><h1 ><span class=" material-symbols-outlined">
          auto_awesome</span > Meu Portifólio</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav "/>
        <Navbar.Collapse className='justify-content-end' >


          <Nav  >
            <Nav.Link id='linksNavBar' as={Link} to="/">Sobre Mim</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/hobbies">Hobbies e Skills</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/formacao">Formação</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/experiencia" >Projetos</Nav.Link>
            <Nav.Link id='linksNavBar' as={Link} to="/contato">Contato</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;