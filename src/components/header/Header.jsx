import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import { useSelector } from 'react-redux';
function Header() {

    //Accessing the Global State.
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  

    return (<Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand>
                <Nav.Link as={Link} to="/">IOrder</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    {!isLoggedIn && <Nav.Link as={Link} to="/cadastro/usuarios" >Cadastre-se</Nav.Link>}
                    {isLoggedIn && <Nav.Link as={Link} to="/cadastro/produtos" >Cadastrar Produtos</Nav.Link>}
                    {isLoggedIn && <Nav.Link as={Link} to="/" >Logout</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;
