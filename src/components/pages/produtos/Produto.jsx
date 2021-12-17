import "./Produto.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function Produto({ produto }) {
  return (
    <div className="produto-wrapper">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{produto.nome}</Card.Title>
          <Card.Img
            variant="top"
            src={produto.imagem}
            alt={produto.nome}
          ></Card.Img>
          <Card.Text>R${produto.preco}</Card.Text>
          <Card.Text>{produto.descricao}</Card.Text>

          <Link className="details_button" to={`/${produto.id}`}>
            <Button variant="primary"> Comprar </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Produto;
