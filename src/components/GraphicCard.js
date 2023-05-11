import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "../Images/image1.png"

const GraphicCard = () => {
  return (
    <Container>
      <Card className="shadow"style={{ width: "18rem", marginBottom: "2.5rem" }}>
        <Card.Img
          variant="top"
          src={image1}
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
