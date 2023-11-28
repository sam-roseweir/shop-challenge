import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <header className="mb-3">
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/admin">Sams Pizza - Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant="underline">
                            <Nav.Link href="/admin">Products</Nav.Link>
                            <Nav.Link href="#">Orders</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
  }
  
export default Header;
