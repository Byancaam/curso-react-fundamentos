import React, { useState, useEffect } from "react";

import Pedido from "../pedidos/Pedido";
import { Container, Col, Row } from "react-bootstrap";

function ListaPedidos() {
  const [pedidos, setPedidos] = useState(null);

  useEffect(() => {
    fetchPedidosHandle();
  }, []);

  const fetchPedidosHandle = async pedido => {
    const response = await fetch("http://localhost:5000/pedidos", {
      method: "GET" // consultar recurso
    });
    const data = await response.json();
    console.log(data);
    setPedidos(data);
  };
  return (
    <div className="pedidos">
      <h2>Seus Pedidos</h2>
      <Container>
        <div>
          <Row className="lista-pedidos">
            {pedidos &&
              pedidos.map(pedido => (
                <Col xs={12}>
                  <Pedido
                    path="/"
                    key={pedido.id}
                    index={pedido.id}
                    pedido={pedido}
                  />
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ListaPedidos;
