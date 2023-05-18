import {
  Button,
  Card,
  Form,
  InputGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutContents = (props) => {
  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
    <Container>
      <Row>
        {Array.isArray(props.cart) &&
          props.cart.map((item) => {
            // find cards using cart id
            const card = props.cards.find((card) => card.id === item);

            // print card info
            return (
              <Col key={item} xs={12} sm={6} md={4} lg={3}>
                <Card className="graphic-card">
                  <div className="image-container">
                    {/* graphic */}
                    <Card.Img variant="top" src={card.image} />
                  </div>
                  <Card.Body>
                    {/* title */}
                    <Card.Title className="text-truncate">
                      {card.title}
                    </Card.Title>
                    {/* price */}
                    <InputGroup
                      style={{ maxWidth: "6rem", marginBottom: ".5rem" }}
                    >
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder={card.price} disabled />
                    </InputGroup>
                    {/* remove button */}
                    <Button
                      className="w-100"
                      variant="danger"
                      onClick={() => handleRemove(card.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default CheckoutContents;
