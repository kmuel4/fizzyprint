import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(false);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.setShow(false);
  };

  useEffect(() => {
    if (props.show) {
      setShow(true);
    }
  }, [props.show]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} closeButton>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Cart summary:</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
