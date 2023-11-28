import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import CartService from '../services/CartService';

function CartItem({name, price, id, onCartChange}) {

    async function clickHandler(event) {
        event.preventDefault();
        const response = await CartService.removeFromCart(id);
        if(response) {
            onCartChange();
        }
    }

    return (
      <ListGroup.Item>
          <Stack direction="horizontal" gap={3}>
              <div className="">
                  {name}
                  <Link className="d-block" onClick={clickHandler}>
                      <small>Remove</small>
                  </Link>
              </div>
              <div className="ms-auto">${price}</div>
          </Stack>
      </ListGroup.Item>
    );
}

export default CartItem;