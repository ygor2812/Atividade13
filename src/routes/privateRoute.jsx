import { Outloet, Navigate, Outlet} from "react-router-dom"
import {userAuth} from "../context/AuthContext";
const privateRoute = () => {
    const {user}= userAuth();

    return user ? <Outlet /> : <Navigate to="/login"/>;
};
export default privateRoute;