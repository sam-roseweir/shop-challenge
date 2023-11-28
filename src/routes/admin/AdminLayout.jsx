import Container from 'react-bootstrap/Container';
import Header from '../../components/admin/Header';
import { Outlet } from 'react-router-dom';

function AdminLayout() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Outlet />
                </Container>
            </main>
        </>
    );
  }
  
export default AdminLayout;
