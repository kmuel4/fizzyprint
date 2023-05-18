import { useState, useEffect } from "react";
import { Button, Modal, Form, InputGroup, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Graphics from "./Graphics";
import Beverage from "./Beverage";
import Review from "./Review";
import Shipping from "./Shipping";
import PayPal from "./PayPal";
import Receipt from "./Receipt";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
    props.index(0);
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  const [index, setIndex] = useState(0);
  //next
  const handleNext = () => {
    if(index === 5){
      return handleClose();
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  //subtotal
  const [subtotal, setSubtotal] = useState(0.0);

  //load on page load
  useEffect(() => {
    calculateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //update when cart changes
  useEffect(() => {
    calculateSubtotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.cart]);

  //calculate subtotal
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

  //handle the checkout screens
  const handleScreens = (value) => {
    switch (value) {
      case 0:
        return (
          <Graphics
            index={props.index}
            cart={props.cart}
            cards={props.cards}
            remove={handleRemove}
            close={handleClose}
          />
        );
      case 1:
        return <Beverage />;
      case 2:
        return <Review />;
      case 3:
        return <Shipping />;
      case 4:
        return <PayPal />;
      case 5:
        return <Receipt close={handleClose}/>;
      default:
        return (
          <Graphics
            close={handleClose}
            index={props.index}
            cart={props.cart}
            cards={props.cards}
            remove={handleRemove}
          />
        );
    }
  };

  //handle progress bar advancement
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    switch (index) {
      case 0:
        return setProgress(5);
      case 1:
        return setProgress(20);
      case 2:
        return setProgress(40);
      case 3:
        return setProgress(60);
      case 4:
        return setProgress(80);
      case 5:
        return setProgress(100);
      default:
        return setProgress(0);
    }
  }, [index, setProgress]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar animated className="mb-3" now={progress} />

          {handleScreens(index)}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            {/*return button */}
            <Button variant="secondary" onClick={() => setIndex(0)}>
              <FontAwesomeIcon icon={faCircleLeft} size="lg" />
            </Button>
            {/*subtotal */}
            <Form.Group style={{ maxWidth: "10rem" }}>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder={subtotal} disabled />
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-end">
              {/*next button */}
              <Button variant="primary" onClick={() => handleNext()}>
                {index !== 5 ? <FontAwesomeIcon icon={faCircleRight} size="xl" beat/> : "Finish"}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
