import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shipping = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleNext = () => {
    setShow(false);
    props.checkoutIndex(4);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart / Beverage / Review / Shipping</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>shipping info</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleNext()}>
            PayPal <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Shipping;
