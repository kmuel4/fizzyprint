import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import { faCartPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PreviewModal from "./PreviewModal";

const GraphicCard = (props) => {
  const [show, setShow] = useState(false);
  const handlePreviewModal = () => {
    setShow(true);
  };

  const handleAdd = () => {
    props.addToCart(props.id);
  };

  const [add, setAdd] = useState(false);
  const handleClick = () => {
    if (!add) {
      handleAdd();
    }
    setAdd(!add);
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
          <Card.Text>{props.desc}</Card.Text>
          <Button className="w-100" onClick={handleClick} variant={!add ? "primary" : "success"}>
            {!add ? <FontAwesomeIcon icon={faCartPlus} />
            : <><FontAwesomeIcon icon={faCircleCheck}/></>}
          </Button>
        </Card.Body>
      </Card>
      <PreviewModal
        show={show}
        setShow={setShow}
        image={props.image}
        price={props.price}
        add={handleAdd}
      />
    </>
  );
};

export default GraphicCard;
