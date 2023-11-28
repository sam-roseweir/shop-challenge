import { Navigate } from "react-router-dom";
import { logout, getUserToken, getUserRole } from "../../utils/auth";

export const ProtectedRoute = ({ children }) => {
    const userToken = getUserToken(),
        userRole = getUserRole();

    if(!userToken || userRole != 'admin') {
        logout();
        return <Navigate to="/auth/login" />;
    }

    return children;
};

export default ProtectedRoute;