import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import CartItem from './CartItem';

function Cart({products, onCartChange}) {
    
    async function refreshCartHandler() {
        onCartChange();
    }

    let cartTotal = 0;
    if(products.length) {
        products.map((product) => (
            cartTotal += parseFloat(product.price)
        ));
    }

    return (
      <Card>
          <Card.Header>Cart Summary</Card.Header>
          {products.length ? (
            <ListGroup variant="flush">
                {products.map((product) => (
                    <CartItem key={product.id} id={product.id} name={product.name} price={product.price} onCartChange={refreshCartHandler} />
                ))}
            </ListGroup>
          ) : (
            <Card.Body>
                <i>Cart is empty.</i>
            </Card.Body>
          )}
          <Card.Footer>
              <Stack direction="horizontal" gap={3}>
                  <div>
                      <b>Total</b>
                  </div>
                  <div className="ms-auto">
                      <b>${cartTotal.toFixed(2)}</b>
                  </div>
              </Stack>
          </Card.Footer>
      </Card>
    );
}

export default Cart;