import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import CriarLogin from "../pages/criarLogin/criarLogin";
import Produtos from "../pages/produtos/produtos";
import PrivateRoute from "./privateRoute";
export default function Rotas(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/criarlogin" element={<CriarLogin/>}></Route>
                <Route path="/produtos" element={<PrivateRoute><Produtos/></PrivateRoute>}></Route>
        </Routes>
    </BrowserRouter>
    );
}
