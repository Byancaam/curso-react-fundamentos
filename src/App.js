import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import ListagemDeProdutos from "./components/ListagemDeProdutos";
import Login from "./components/Login";
import Carrinho from "./components/Carrinho";
import Header from "./Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listaprodutos" element={<ListagemDeProdutos />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
