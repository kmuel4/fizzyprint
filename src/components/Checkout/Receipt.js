import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Receipt = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleNext = () => {
    setShow(false);
    props.checkoutIndex();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Cart / Beverage / Review / Shipping / PayPal / Receipt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Receipt</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleNext()}>
            Finish
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Receipt;
