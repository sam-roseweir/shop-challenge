import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OrderService from '../services/OrderService';
import { Form as RouterForm, redirect } from 'react-router-dom';

function Checkout() {

    return (
        <>
            <h1>Checkout</h1>
            <RouterForm method='post'>
                <Form.Group className="mb-3" controlId="formGroupNameFirst">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="name_first" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupNameLast">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="name_last" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </RouterForm>
        </>
    );
  }
  
export default Checkout;

export async function action({request}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);
        const response = await OrderService.newOrder(JSON.stringify(postData));

        if(response) {
            return redirect('/');
        }
        
    } catch (error) {
        console.error('Error processing order:', error);
    }
}