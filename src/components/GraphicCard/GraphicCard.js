import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import { faCartPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PreviewModal from "./PreviewModal";

const GraphicCard = (props) => {
  //handle showing preview modal
  const [show, setShow] = useState(false);
  const handlePreviewModal = () => {
    setShow(true);
  };

  //add to cart
  const handleAdd = () => {
    props.add(props.id);
  };

  //remove from cart
  const handleRemove = () => {
    props.remove(props.id);
  };

  //cart button
  const [add, setAdd] = useState(false);
  const handleClick = () => {
    if (!add) {
      handleAdd();
    } else {
      handleRemove();
    }
    setAdd(!add);
  };

  //handle preview toggle
  const handlePreviewToggle = () => {
    setAdd(!add);
  };

  //update status of button status based on cart contents
  useState(() => {
      if(props.cart.includes(props.id)){
        setAdd(true);
      } else {
        setAdd(false);
      } 
  }, [props.cart, props.id])

  return (
    <>
      <Card className="graphic-card">
        <div className="image-container">
          {/*graphic */}
          <Card.Img
            variant="top"
            src={props.image}
            className="radial-blur"
            style={{ cursor: "zoom-in" }}
            onClick={() => handlePreviewModal()}
          />
        </div>
        <Card.Body>
          {/*title */}
          <Card.Title>{props.title}</Card.Title>
          {/*description */}
          <Card.Text>{props.desc}</Card.Text>
          {/*button icon */}
          <Button
            className="w-100"
            onClick={handleClick}
            variant={!add ? "primary" : "success"}
          >
            {!add ? (
              <FontAwesomeIcon icon={faCartPlus} />
            ) : (
              <>
                <FontAwesomeIcon icon={faCircleCheck} />
              </>
            )}
          </Button>
        </Card.Body>
      </Card>
      {/*preview modal */}
      <PreviewModal
        show={show}
        setShow={setShow}
        image={props.image}
        title={props.title}
        price={props.price}
        add={handleAdd}
        remove={handleRemove}
        cartToggle={add}
        previewToggle={handlePreviewToggle}
      />
    </>
  );
};

export default GraphicCard;
