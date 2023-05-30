import {
  Card,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutPreviewItem = (props) => {

  // remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
      <Card className="graphic-card">
        {/* graphic */}
        <div className="image-container">
          <Card.Img variant="top" src={props.card.image} />
        </div>
        <Form>
          <Card.Body>
            {/* graphic name */}
            <Card.Title className="text-truncate">
              {props.card.title}
            </Card.Title>

            {/* remove button */}
            <Button
              variant="danger"
              className="w-100 mt-2"
              onClick={() => handleRemove(props.card.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </Card.Body>
        </Form>
      </Card>
  );
};

export default CheckoutPreviewItem;
