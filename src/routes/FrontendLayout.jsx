import Container from 'react-bootstrap/Container';
import Cart from '../components/Cart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import CartService from '../services/CartService';
import { useState, useEffect } from 'react';

function FrontendLayout() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchProducts() {
        const response = await CartService.getCart();
        setProducts(response);
      }

      fetchProducts();
    }, []);

    async function refreshCartHandler() {
        const response = await CartService.getCart();
        setProducts(response);
    }

    return (
        <>
            <Header />
            <main>
                <Container>
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                        <Col md={4}>
                            <Cart products={products} onCartChange={refreshCartHandler} />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
  
export default FrontendLayout;