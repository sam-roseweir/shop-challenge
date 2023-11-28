import ProductsList from '../components/ProductsList';
import ProductService from '../services/ProductService';

function Products() {

    return (
        <>
            <h1>Product List</h1>
            <ProductsList />
        </>
    );
}
  
export default Products;

export async function loader() {
    const response = await ProductService.getProducts();
    return response;
}