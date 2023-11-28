import Table from 'react-bootstrap/Table';
import ProductsTableRow from './ProductsTableRow';
import { useLoaderData } from 'react-router-dom';

function ProductsTable() {
    const products = useLoaderData();

    return (
        <>
            {products.length ? (
                <Table striped bordered hover>
                    <caption className="text-center">{products.length} products</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <ProductsTableRow key={product.id} id={product.id} name={product.name} sku={product.sku} price={product.price} />
                        ))}
                    </tbody>
                </Table>
            ) : (
                <div>
                    <p className="text-center">Loading products...</p>
                </div>
            )}
        </>
    );
}

export default ProductsTable;