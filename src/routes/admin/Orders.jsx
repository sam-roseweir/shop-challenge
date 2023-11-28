import OrdersTable from '../../components/admin/OrdersTable';
import OrderService from '../../services/OrderService';

function Orders() {
    return (
        <>
            <h1>Orders</h1>
            <OrdersTable />
        </>
    );
  }
  
export default Orders;

export async function loader() {
    const response = await OrderService.getOrders();
    return response;
}