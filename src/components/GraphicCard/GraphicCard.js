import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PreviewModal from "./PreviewModal";

const GraphicCard = (props) => {
  const [show, setShow] = useState(false);
  const handlePreviewModal = () => {
    setShow(true);
  };
  return (
    <>
      <Card className="graphic-card">
        <div className="image-container">
          <Card.Img
            variant="top"
            src={props.image}
            className="radial-blur"
            style={{ cursor: "zoom-in" }}
            onClick={() => handlePreviewModal()}
          />
        </div>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="w-100">
            <FontAwesomeIcon icon={faCartPlus} />
          </Button>
        </Card.Body>
      </Card>
      <PreviewModal show={show} setShow={setShow} image={props.image} price={props.price}/>
    </>
  );
};

export default GraphicCard;
