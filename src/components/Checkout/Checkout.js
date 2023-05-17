import { useState } from "react";
import { Button, Modal, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutContents from "./CheckoutContents";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(true);
  
  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
    props.index(0);
  };

  //next
  const handleNext = () => {
    setShow(false);
    props.checkoutIndex(1);
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ paddingTop: "2rem", paddingBottom: "-2rem" }}>
            <Container style={{display: "flex", justifyContent: "center", marginBottom: "1rem"}}>
              <h3>Graphics</h3>
            </Container>
            {/*print the cart contents */}
            <CheckoutContents
              cart={props.cart}
              cards={props.cards}
              remove={handleRemove}
            />
          </Card>
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
