import ProductsTable from '../../components/admin/ProductsTable';
import ProductService from '../../services/ProductService';

function Products() {
    return (
        <>
            <h1>Products</h1>
            <ProductsTable />
        </>
    );
}
  
export default Products;

export async function loader() {
    const response = await ProductService.getProducts();
    return response;
}