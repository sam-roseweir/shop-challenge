import Button from 'react-bootstrap/Button';

function OrdersTableRow({ name_first, name_last, email, cart, id }) {
  return (
        <tr>
            <td>{name_first}</td>
            <td>{name_last}</td>
            <td>{email}</td>
            <td>{cart.length}</td>
            <td align="right">
                <Button href={"/admin/orders/view/" + id} variant="primary" size="sm">View</Button>
            </td>
        </tr>
  );
}

export default OrdersTableRow;