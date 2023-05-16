import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  //next
  const handleNext = () => {
    setShow(false);
    props.checkoutIndex(1);
  };

  console.log(props.cart);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Graphics in cart:</p>
          <ul>
            {props.cart.map((item, index) => (
              <li key={index + 1}>{item.toString()}</li>
            ))}
          </ul>
          <p>subtotal:</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleNext()}>
            Beverage <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
