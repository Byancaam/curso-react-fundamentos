import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [isValid, setIsValid] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailChangeHandle = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEmail(event.target.value);
  };

  const senhaChangeHandle = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setSenha(event.target.value);
  };

  const handleOnclick = event => {
    event.preventDefault();

    if (email.trim().length <= 0) {
      setIsValid(false);
      return;
    }

    if (senha.trim().length <= 0) {
      setIsValid(false);
      return;
    }

    //Submissão dos dados
    fetchToLogin({ email, senha });

    setEmail("");
    setSenha("");
  };

  const fetchToLogin = async usuario => {
    setEmail("");
    setSenha("");

    const response = await fetch(
      `http://localhost:5000/usuarios?email=${usuario.email}`,
      {
        method: "GET"
      }
    );
    const data = await response.json();

    handleLogin(data);
  };

  const handleLogin = usuario => {
    if (usuario && usuario.length > 0) {
      if (usuario[0].senha === senha) {
        dispatch({ type: "login" });
        sessionStorage.setItem('user', JSON.stringify(usuario));
        navigate("/");
      }
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <h2>Bem vindo ao iOrder</h2>
        <Form onSubmit={handleOnclick} validated={isValid}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              onChange={emailChangeHandle}
              value={email}
              type="email"
              placeholder="Digite o nome do usuario"
            ></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Senha </Form.Label>
            <Form.Control
              required
              onChange={senhaChangeHandle}
              type="password"
              value={senha}
              placeholder="Digite a sua senha"
            ></Form.Control>
          </Form.Group>

          <Button className="login-button" variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
