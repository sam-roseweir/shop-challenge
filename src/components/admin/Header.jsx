import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user-token');
        navigate('/auth/login');
    }

    return (
        <header className="mb-3">
            <Navbar expand="lg" className="bg-primary" data-bs-theme="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/admin">Sam's Pizza - Admin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" variant="underline">
                            <Nav.Link href="/admin">Products</Nav.Link>
                            <Nav.Link href="/admin/orders">Orders</Nav.Link>
                            <Nav.Link onClick={logout}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
  }
  
export default Header;
