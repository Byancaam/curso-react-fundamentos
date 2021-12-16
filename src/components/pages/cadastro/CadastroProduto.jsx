import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./CadastroProduto.css";

function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");

  const [isValid,setIsValid] = useState(false);

  const nomeChangeHandle = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    console.log(event.target.value);
    setNome(event.target.value);
  };

  const precoChangeHandle = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    console.log(event.target.value);
    setPreco(event.target.value);
  };

  const imagemChangeHandle = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    console.log(event.target.value);
    setImagem(event.target.value);
  };

  const descricaoChangeHandle = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    console.log(event.target.value);
    setDescricao(event.target.value);
  };

  const handleOnclick = event =>{
    event.preventDefault();

    //validação dos dados
    if (nome.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (preco.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (imagem.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    if (descricao.trim().legth <= 0) {
      setIsValid(false);
      return;
    }

    //Submissão dos dados
    doPost({ id: null, nome, preco, imagem, descricao });

       // limpando o formulário
       setNome("");
       setPreco("");
       setImagem("");
       setDescricao("");
  }

  const doPost = async produto => {
    await fetch('http://localhost:5000/produtos',{
      method: "POST", // salvar recurso
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produto)
    });

  };

  return (
    <div className="cadastro-produto">
      <div className="cadastro-produto-wrapper">
        <h2>Cadastro de Produtos</h2>

        <Form onSubmit={handleOnclick} validated={isValid}>
          <Form.Group>
            <Form.Label> Nome do Produto </Form.Label>
            <Form.Control
              required
              onChange={nomeChangeHandle}
              type="text"
              value={nome}
              placeholder="Digite o nome do produto"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Preço </Form.Label>
            <Form.Control
              required
              onChange={precoChangeHandle}
              type="number"
              value={preco}
              placeholder="Digite o preço do produto"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Imagem </Form.Label>
            <Form.Control
              required
              onChange={imagemChangeHandle}
              type="url"
              value={imagem}
              placeholder="Digite a Url da imagem"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Descrição do Item </Form.Label>
            <Form.Control
              required
              onChange={descricaoChangeHandle}
              as="textarea"
              value={descricao}
              placeholder="Descrição do produto"
              style={{ height: "100px" }}
            ></Form.Control>
          </Form.Group>

          <Button className="margin-top" variant="primary" type="submit">
            Cadastrar!{" "}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CadastroProduto;
