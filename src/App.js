import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AdminLayout from './routes/admin/AdminLayout';
import AdminProducts, { loader as adminProductsLoader } from './routes/admin/Products';
import AdminProductEdit, { loader as adminProductEditLoader, action as editProductAction } from './routes/admin/ProductEdit';

const router = createBrowserRouter([
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
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
