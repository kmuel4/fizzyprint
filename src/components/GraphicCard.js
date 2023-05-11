import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GraphicCard = () => {
  return (
    <Container>
      <Card style={{ width: "18rem", marginBottom: "2.5rem" }}>
        <Card.Img
          variant="top"
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>Graphic</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="w-100">
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GraphicCard;
