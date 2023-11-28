import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductService from '../../services/ProductService';
import { useLoaderData, Form as RouterForm, redirect } from 'react-router-dom';

function ProductEdit() {
    const product = useLoaderData();

    return (
        <>
            <h1>Edit Product</h1>
            
            {product ? (
                <RouterForm method='post'>
                    <Row md={3}>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control name="name" defaultValue={product.name} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupSku">
                                <Form.Label>SKU</Form.Label>
                                <Form.Control name="sku" defaultValue={product.sku} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupPrice">
                                <Form.Label>Price</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control name="price" defaultValue={product.price} required />
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formGroupDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" name="description" rows="3" defaultValue={product.description} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    <Form.Control type="hidden" name="id" defaultValue={product.id} />
                </RouterForm>
            ) : (
                <div>
                    <p>No product found.</p>
                    <p>
                        <a href="/admin">Go back</a>
                    </p>
                </div>
            )}
        </>
    );
}

export default ProductEdit;

export async function loader({params}) {
    const response = await ProductService.getProducts(params.productId);
    return response;
}

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    const response = await ProductService.editProduct(JSON.stringify(postData));
    return redirect('/admin');
}