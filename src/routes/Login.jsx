import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AuthService from '../services/AuthService';
import { Form as RouterForm, redirect } from 'react-router-dom';

function Login() {

    return (
        <>
            <h1>Login</h1>
            <RouterForm method="post">
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </RouterForm>
        </>
    );
}
  
export default Login;

export async function action({request}) {
    try {
        const formData = await request.formData();
        const postData = Object.fromEntries(formData);
        const response = await AuthService.authenticate(JSON.stringify(postData));
        
        if(!response) {
            alert('Unable to login.');
            return false;
        }

        localStorage.setItem('user-token', response.token);
        localStorage.setItem('user-role', response.role);

        if(response.role == 'admin') {
            return redirect('/admin');
        }
        return redirect('/');        
        
    } catch (error) {
        console.error('Error logging in:', error);
    }
}