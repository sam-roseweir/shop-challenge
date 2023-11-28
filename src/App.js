import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from './routes/admin/AdminLayout';
import AdminProducts, { loader as adminProductsLoader } from './routes/admin/Products';
import AdminProductEdit, { loader as adminProductEditLoader, action as editProductAction } from './routes/admin/ProductEdit';
import FrontendLayout from './routes/FrontendLayout';
import Products, { loader as productsLoader } from './routes/Products';
import Checkout, { action as newOrderAction } from './routes/Checkout';
import AdminOrders, { loader as adminOrdersLoader } from './routes/admin/Orders';
import AdminOrderView, { loader as adminOrderViewLoader } from './routes/admin/OrderView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FrontendLayout />,
    children: [
      {
        path: '',
        element: <Products />,
        loader: productsLoader
      },
      {
        path: '/checkout',
        element: <Checkout />,
        action: newOrderAction
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        path: '',
        element: <AdminProducts />,
        loader: adminProductsLoader
      },
      {
        path: 'product/edit/:productId',
        element: <AdminProductEdit />,
        loader: adminProductEditLoader,
        action: editProductAction
      },
      {
        path: 'orders',
        element: <AdminOrders />,
        loader: adminOrdersLoader
      },
      {
        path: 'orders/view/:orderId',
        element: <AdminOrderView />,
        loader: adminOrderViewLoader
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
