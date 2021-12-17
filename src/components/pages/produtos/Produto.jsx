import "./Produto.css";
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

function Produto({ produto }) {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const [quantidade, setQuantidade] = useState(1);

  const quantidadeChangeHandle = event => {
    setQuantidade(event.target.value);
  };

  const handleComprarClick = () => {
    produto.quantidade = quantidade;
    const carrinho = sessionStorage.getItem("carrinho");
    if (carrinho) {
      atualizarCarrinho(JSON.parse(carrinho), produto);
    } else {
      criarCarrinho(produto);
    }
  };

  const atualizarCarrinho = (carrinho, produto) => {
    const usuario = JSON.parse(sessionStorage.getItem("user"));
    if (carrinho.idUsuario === usuario.id) {
      carrinho.produtosPedidos = [...carrinho.produtosPedido, produto];
      sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
    } else {
      criarCarrinho(produto);
    }
  };

  const criarCarrinho = produto => {
    const usuario = JSON.parse(sessionStorage.getItem("user"));
    const carrinho = {
      idUsuario: usuario.id,
      produtosPedidos: [produto]
    };

    sessionStorage.setItem("carrinho", JSON.stringify(carrinho));
  };

  return (
    <div className="produto-wrapper">
      <Card>
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <Card.Img
            variant="top"
            src={produto.imagem}
            alt={produto.nome}
          ></Card.Img>
          <Card.Text>R${produto.preco}</Card.Text>
          <Card.Text>{produto.descricao}</Card.Text>

          {isLoggedIn && (
            <Form.Group className="produto-card-footer">
              <Button onClick={handleComprarClick} variant="primary">
                Comprar
              </Button>
              <Form.Control
                type="number"
                value={quantidade}
                onChange={quantidadeChangeHandle}
              />
            </Form.Group>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Produto;
