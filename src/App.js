import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Rotas from "./components/routes/Routes";
import "./App.css";

// Telas
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Rotas />
      </Container>
    </div>
  );
}

export default App;
