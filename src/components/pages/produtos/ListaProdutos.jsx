import React, { useEffect, useState } from "react";
import "./ListaProdutos.css";
import Produto from "./Produto";

function ListaProdutos() {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetchProdutosHandle();
  }, []);

  const fetchProdutosHandle = async produto => {
    const response = await fetch("http://localhost:5000/produtos", {
      method: "GET" // consultar recurso
    });
    const data = await response.json();
    console.log(data);
    setProdutos(data);
  };

  return (
    <div className="lista-produtos">
      <h2>Nossos produtos</h2>
      <div>
        {produtos && produtos.map(produto => (
          <Produto
            path="/"
            key={produto.id}
            index={produto.id}
            produto={produto}
          />
        ))} 
      </div>
    </div>
  );
}

export default ListaProdutos;
