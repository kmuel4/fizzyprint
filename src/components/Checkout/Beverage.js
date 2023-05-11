import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Beverage = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleNext = () => {
    setShow(false);
    props.checkoutIndex(2);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart / Beverage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose beverage</p>
          <p>subtotal:</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleNext()}>
            Review <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Beverage;
