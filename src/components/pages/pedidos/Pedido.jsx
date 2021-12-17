import Card from "react-bootstrap/Card";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Pedido.css";

const handleStatusClass = status => {
  switch (status) {
    case "Pago":
      return "success";
    case "Cancelado":
      return "danger";
    case "Pendente":
      return "warning";
    default:
      return "primary";
  }
};

function Pedido({ pedido }) {
  return (
    <div className="pedido-wrapper">
      <Card className="card-pedido">
        <Card.Body>
          <Card.Title>Nº do Pedido: {pedido.id}</Card.Title>

          {pedido.produtosPedidos.map(produto => (
            <div className="pedido-dados-produtos">
              <span className="pedido-dados-produtos-nome">{produto.nome}</span>
              <span className="pedido-dados-produtos-quantidade">
                qtd: {produto.quantidade}x
              </span>
              <span className="pedido-dados-produtos-preco">
                R$ {produto.quantidade * produto.preco}
              </span>
            </div>
          ))}

          <span>
            <span className="pedido-total">Total: R$ {pedido.total}</span>
            <Badge bg={handleStatusClass(pedido.status)}>
              {pedido.status.trim() ? pedido.status : "Processando..."}
            </Badge>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Pedido;
