import React from "react";
import { Container, Row } from "react-bootstrap";

function Carrinho(produto) {
  return (
    <div className="carrinho">
      <Container>
        <h2>Carrinho</h2>
        <Row>
          <img src="produto.imagem"></img>
          <span>produto.titulo</span>
          <span>produto.quantidade</span>
          <span>produto.preco</span>
          
          <p>Produto.descrição</p>
        </Row>
        <button>Comprar</button>
      </Container>
    </div>
  );
}

export default Carrinho;
