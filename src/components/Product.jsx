import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CartService from '../services/CartService';

function Product({ id, name, sku, price, description }) {

    async function clickHandler(event) {
        event.preventDefault();
        const response = await CartService.addToCart(id);
        if(response) {
            document.location.href = '/';
        }
    }

    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{sku}</Card.Subtitle>
                <Card.Text className="m-0">${price}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" onClick={clickHandler}>Add to cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;