import { useState, useEffect } from "react";
import { Button, Modal, Form, InputGroup, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCircleRight, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Beverage from "./Beverage";
import Preview from "./Preview";
import Shipping from "./Shipping";
import PayPal from "./PayPal";
import Receipt from "./Receipt";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    if (index === 4) {
      setShow(false);
      handleFinish();
    } else {
      setShow(false);
      props.checkoutIndex();
      props.index(0);
    }
  };

  //finish and refresh page
  const handleFinish = () => {
    console.log("finish");
    window.location.reload();
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  const [index, setIndex] = useState(0);
  //next
  const handleNext = () => {
    if (index === 4) {
      return handleFinish();
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
  //need to get total price from beverage page
  const calculateSubtotal = () => {
    let total = 0;
    props.cart.forEach((item) => {
      const card = props.cards.find((card) => card.id === item);
      if (card) {
        total += card.price;
      }
    });
    setSubtotal(total.toFixed(2));
  };

  const [total, setTotal] = useState(0);
  const handleTotal = (value) => {
    setTotal(value);
  };

  //handle the checkout screens
  const handleScreens = (value) => {
    switch (value) {
      case 0:
        return (
          <Beverage
            cart={props.cart}
            cards={props.cards}
            remove={handleRemove}
            total={handleTotal}
          />
        );
      case 1:
        return <Preview />;
      case 2:
        return <Shipping />;
      case 3:
        return <PayPal />;
      case 4:
        return <Receipt />;
      default:
        return;
    }
  };

  //handle progress bar advancement
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    switch (index) {
      case 0:
        return setProgress(5);
      case 1:
        return setProgress(25);
      case 2:
        return setProgress(50);
      case 3:
        return setProgress(75);
      case 4:
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
          {/*progress bar */}
          <ProgressBar animated className="mb-3" now={progress} />

          {/*handle checkout screens */}
          {handleScreens(index)}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            {/*return button, disable on receipt page */}
            <Button
              variant="secondary"
              disabled={index === 4}
              onClick={() => setIndex(0)}
            >
              <FontAwesomeIcon icon={faHouse} size="lg" />
            </Button>

            {/*subtotal, hide on receipt page */}
            {index !== 4 && (
              <Form.Group style={{ maxWidth: "10rem" }}>
                <InputGroup>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control placeholder={total} disabled />
                </InputGroup>
              </Form.Group>
            )}

            <div className="d-flex justify-content-end">
              {/*next button */}
              <Button variant="primary" onClick={() => handleNext()}>
                {index !== 4 ? (
                  <FontAwesomeIcon icon={faCircleRight} size="xl" beat />
                ) : (
                  "Finish"
                )}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Checkout;
