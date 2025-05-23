import { Outlet, Navigate} from "react-router-dom"
import {useAuth} from "../context/AuthContext";
const privateRoute = () => {
    const {user}= useAuth();

    return user ? <Outlet /> : <Navigate to="/login"/>;
};
export default privateRoute;