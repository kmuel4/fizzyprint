import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutPreviewItem = (props) => {
  // remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
    <Card>
      {/* graphic */}
      <Card.Header>
        <span style={{ display: "block" }}>
          <span
            style={{ float: "left", maxWidth: "10rem" }}
            className="text-truncate"
          >
            {props.card.title}
          </span>
          <span style={{ float: "right" }}>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => handleRemove(props.card.id)}
              style={{ cursor: "pointer" }}
            />
          </span>
          <div style={{ clear: "both" }}></div>
        </span>
      </Card.Header>
      <Form>
        <Card.Body>
          <div className="image-container">
            <Card.Img variant="top" src={props.card.image} />
          </div>
        </Card.Body>
      </Form>
    </Card>
  );
};

export default CheckoutPreviewItem;
