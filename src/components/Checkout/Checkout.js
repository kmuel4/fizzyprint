import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  ProgressBar,
  Breadcrumb,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCircleRight, faCopyright } from "@fortawesome/free-solid-svg-icons";
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
    window.location.reload();
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  const [index, setIndex] = useState(0);
  //next
  const handleNext = () => {
    setComplete(false);
    if (index === 4) {
      return handleFinish();
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const [total, setTotal] = useState("0.00");
  const handleTotal = (value) => {
    setTotal(parseFloat(value));
  };

  const [complete, setComplete] = useState(false);
  const handleComplete = (value) => {
    setComplete(value);
  };

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    switch (index) {
      case 0:
        return setBreadcrumbs(["Drinks"]);
      case 1:
        return setBreadcrumbs(["Drinks", "Preview"]);
      case 2:
        return setBreadcrumbs(["Drinks", "...", "Shipping"]);
      case 3:
        return setBreadcrumbs(["Drinks", "...", "Payment"]);
      case 4:
        return setBreadcrumbs(["Drinks", "...", "Receipt"]);
      default:
        return setBreadcrumbs(["Drinks"]);
    }
  }, [index]);

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
            complete={handleComplete}
            close={handleClose}
          />
        );
      case 1:
        return <Preview complete={handleComplete} />;
      case 2:
        return <Shipping complete={handleComplete} />;
      case 3:
        return <PayPal complete={handleComplete} />;
      case 4:
        return <Receipt complete={handleComplete} />;
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
          <Modal.Title
            style={{
              display: "flex",
              marginBottom: "-1rem",
              justifyContent: "start",
              whiteSpace: "nowrap",
            }}
          >
            <Breadcrumb>
              {breadcrumbs.map((item, i) => (
                <Breadcrumb.Item
                  key={i}
                  active={i !== 0}
                  onClick={() => {
                    if (i === 0) {
                      setIndex(0);
                    }
                  }}
                >
                  {item}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*progress bar */}
          <ProgressBar animated className="mb-3" now={progress} />

          {/*handle checkout screens */}
          {handleScreens(index)}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between w-100">
            {/*return button, disable on receipt page and home page*/}
            <Form.Text>
              FizzyPrint <FontAwesomeIcon icon={faCopyright} />
            </Form.Text>

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
              <Button
                variant="primary"
                disabled={!complete}
                onClick={() => handleNext()}
              >
                {index !== 4 ? (
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="xl"
                    beat={complete}
                  />
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
