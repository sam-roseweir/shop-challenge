import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from './Product';
import { useLoaderData } from 'react-router-dom';

function ProductsList() {
    const products = useLoaderData();

    return (
        <>
            <Row lg={3} md={2} xs={1}>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Product id={product.id} name={product.name} sku={product.sku} price={product.price} description={product.description} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default ProductsList;