import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import CriarLogin from "../pages/criarLogin/criarLogin";
import Produtos from "../pages/produtos/produtos";
import privateRoute from "./privateRoute";
export default function Rotas(){
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/criarlogin" element={<CriarLogin/>}></Route>
                <Route path="/produtos" element={<privateRoute><Produtos/></privateRoute>}></Route>
        </Routes>
    </BrowserRouter>
}
