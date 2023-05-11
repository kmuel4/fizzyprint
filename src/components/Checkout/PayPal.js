import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PayPal = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleNext = () => {
    setShow(false);
    props.checkoutIndex(5);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart / Beverage / Review / Shipping / PayPal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>fill out paypal info</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleNext()}>
            Order <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PayPal;
