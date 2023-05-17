import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Card,
  Container,
  Form,
  InputGroup,
} from "react-bootstrap";
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

  const [subtotal, setSubtotal] = useState(0.0);

  useEffect(() => {
    calculateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    calculateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart]);

  const calculateSubtotal = () => {
    let total = 0;
    props.cart.forEach((item) => {
      const card = props.cards.find((card) => card.id === item);
      if (card) {
        total += card.price;
      }
    });
    setSubtotal(total);
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
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <h2 className="featurette-heading">Graphics</h2>
            </Container>
            {/*print the cart contents */}
            <CheckoutContents
              cart={props.cart}
              cards={props.cards}
              remove={handleRemove}
            />
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            <Form.Group style={{ maxWidth: "10rem" }}>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder={subtotal} disabled />
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="primary" onClick={() => handleNext()}>
                Beverage <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
