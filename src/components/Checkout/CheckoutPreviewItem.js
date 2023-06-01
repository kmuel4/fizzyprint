import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const CheckoutPreviewItem = (props) => {
  // remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    boxShadow: isHovered
      ? "0 0 5px rgba(0, 0, 0, 0.4)"
      : "0 0 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <Card
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <Card.Body style={{ margin: "-1rem" }}>
          <div>
            <Card.Img
              variant="top"
              src={props.card.image}
              style={{
                borderTopLeftRadius: "0px",
                borderTopRightRadius: "0px",
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
          </div>
        </Card.Body>
      </Form>
    </Card>
  );
};

export default CheckoutPreviewItem;
