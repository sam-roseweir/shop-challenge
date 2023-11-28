import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function GuestLayout() {

    return (
        <>
            <Header />
            <main>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg="4" md="6">
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}
  
export default GuestLayout;