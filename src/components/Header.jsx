import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header className="mb-3">
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Sam's Pizza</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant="underline">
                            <Nav.Link href="/">Products</Nav.Link>
                            <Nav.Link href="#">Checkout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
  }
  
export default Header;
