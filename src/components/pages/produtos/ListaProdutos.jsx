import React, { useEffect, useState } from "react";
import "./ListaProdutos.css";
import { Container, Col, Row } from "react-bootstrap";
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
    setProdutos(data);
  };

  return (
    <Container>
      <div>
        <h2>Nossos produtos</h2>
        <input className="busca" type="search" placeholder="Procurar produtos"></input>
        <Row className="lista-produtos">
          {produtos &&
            produtos.map(produto => (
              <Col xs={4}>
                <Produto
                  key={produto.id}
                  produto={produto}
                />
              </Col>
            ))}
        </Row>
      </div>
    </Container>
  );
}

export default ListaProdutos;
