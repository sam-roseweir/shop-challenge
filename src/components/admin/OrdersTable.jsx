import Table from 'react-bootstrap/Table';
import OrdersTableRow from './OrdersTableRow';
import { useLoaderData } from 'react-router-dom';

function OrdersTable() {
    const orders = useLoaderData();

    return (
        <>
            {orders.length ? (
                <Table striped bordered hover>
                    <caption className="text-center">{orders.length} orders</caption>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Items</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrdersTableRow key={order.id} id={order.id} name_first={order.name_first} name_last={order.name_last} email={order.email} cart={order.cart} />
                        ))}
                    </tbody>
                </Table>
            ) : (
                <div>
                    <p className="text-center">Loading orders...</p>
                </div>
            )}
        </>
    );
}

export default OrdersTable;