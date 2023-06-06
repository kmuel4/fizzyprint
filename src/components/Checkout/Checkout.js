import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  ProgressBar,
  Breadcrumb,
  Offcanvas,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCircleRight,
  faCopyright,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Beverage from "./Beverage";
import Preview from "./Preview";
import Information from "./Information";
import Payment from "./Payment";
import Receipt from "./Receipt";
import Shipping from "./Shipping";
import SummaryCard from "./SummaryCard";

const Checkout = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  const [showSummary, setShowSummary] = useState(false);

  const handleCloseSummary = () => setShowSummary(false);
  const handleShowSummary = () => setShowSummary(true);

  //close modal
  const handleClose = () => {
    if (index === 5) {
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
    if (index === 5) {
      return handleFinish();
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const [total, setTotal] = useState("0.00");
  const handleTotal = (value) => {
    setTotal(parseFloat(value).toFixed(2));
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
        return setBreadcrumbs(["Drinks", "...", "Information"]);
      case 3:
        return setBreadcrumbs(["Drinks", "...", "Shipping"]);
      case 4:
        return setBreadcrumbs(["Drinks", "...", "Payment"]);
      case 5:
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
        return <Information complete={handleComplete} />;
      case 3:
        return <Shipping complete={handleComplete} />;
      case 4:
        return <Payment complete={handleComplete} />;
      case 5:
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
          <div
            className="d-flex justify-content-between w-100"
            style={{ alignItems: "center" }}
          >
            {/*return button, disable on receipt page and home page*/}
            <Form.Text>
              FizzyPrint <FontAwesomeIcon icon={faCopyright} />
            </Form.Text>

            {/*summary, show after preview */}
            
              <Button onClick={handleShowSummary}>
                Order Summary ${total}&nbsp;<FontAwesomeIcon icon={faCaretRight} />
              </Button>
           

            <div className="d-flex justify-content-end">
              {/*next button */}
              <Button
                variant="primary"
                disabled={!complete}
                onClick={() => handleNext()}
              >
                {index !== 5 ? (
                  <FontAwesomeIcon
                    icon={faCircleRight}
                    size="lg"
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

      {/*summary */}
      <Offcanvas
        placement="end"
        show={showSummary}
        onHide={handleCloseSummary}
        style={{ zIndex: 2000 }}
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Order Summary</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            {props.cart.map((item) => {
              const card = props.cards.find((card) => card.id === item);
              return <SummaryCard key={item} card={card} item={item} />;
            })}
            <div style={{ marginBottom: "10rem" }}></div>
            <Container
              style={{
                position: "absolute",
                bottom: "0rem",
                right: "0rem",
                backgroundColor: "white",
                padding: "1rem",
                backgroundColor: "#0d6efd",
              }}
            >
              <div style={{ color: "white" }}>
                <strong>
                  <p>Subtotal: ${total}</p>
                  <p>Shipping: </p>
                  <p>Total: </p>
                </strong>
              </div>
            </Container>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Checkout;
