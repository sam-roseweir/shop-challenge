import OrderService from '../../services/OrderService';
import Table from 'react-bootstrap/Table';
import { useLoaderData } from 'react-router-dom';

function OrderView() {
    const order = useLoaderData();

    let orderTotal = 0;
    if(order) {
        order.cart.map((item) => (
            orderTotal += parseFloat(item.price)
        ));
    }

    return (
        <>
            {order ? (
                <>
                    <h1>Order #{order.id}</h1>
                    <p>
                        First Name: {order.name_first}<br />
                        Last Name: {order.name_last}<br />
                        Email: {order.email}
                    </p>
                    <Table striped bordered hover>
                        <caption className="text-center">{order.cart.length} items</caption>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order.cart.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.sku}</td>
                                    <td>${item.price}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colspan="2"><b>Total</b></td>
                                <td><b>${orderTotal.toFixed(2)}</b></td>
                            </tr>
                        </tbody>
                    </Table>
                </>
            ) : (
                <div>
                    <p>No order found.</p>
                    <p>
                        <a href="/admin/orders">Go back</a>
                    </p>
                </div>
            )}
        </>
    );
  }
  
export default OrderView;

export async function loader({params}) {
    const response = await OrderService.getOrders(params.orderId);
    return response;
}