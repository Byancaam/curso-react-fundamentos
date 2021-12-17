import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import ListaProdutos from "../pages/produtos/ListaProdutos";
import CadastroProdutos from "../pages/cadastro/CadastroProduto";
import CadastroUsuario from "../pages/usuarios/CadastroUsuario";
import Carrinho from "../pages/carrinho/Carrinho";
import ListaPedidos from "../pages/pedidos/ListaPedidos";

const Rotas = () => (
  <Routes>
    {<Route path="/" element={<ListaProdutos />} />}
    <Route path="/login" element={<Login />} />
    {<Route path="/cadastro/produtos" element={<CadastroProdutos />} />}
    <Route path="/cadastro/usuarios" element={<CadastroUsuario />} />
    <Route path="/carrinho" element={<Carrinho />} />
    {<Route path="/pedidos" element={<ListaPedidos />} />}
  </Routes>
);

export default Rotas;
