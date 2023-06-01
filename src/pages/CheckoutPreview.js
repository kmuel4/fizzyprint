import React, { useState } from "react";
import { Modal, Button, Badge, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faBagShopping,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutPreviewItem from "../components/Checkout/CheckoutPreviewItem";

const CheckoutPreview = (props) => {
  // handle Modal
  const [show, setShow] = useState(true);

  // close Modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleCheckout = () => {
    props.checkoutIndex(0);
    setShow(false);
  };

  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
      <Modal show={show} onHide={handleClose} fullscreen={true} dialogClassName="checkout-preview-modal">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "bold" }}>
            {/* cart icon */}
            <FontAwesomeIcon icon={faBagShopping} />
            {/* cart badge */}
            {props.cartItemsLength > 0 ? (
              <Badge
                pill
                style={{
                  position: "relative",
                  top: "-1rem",
                  left: "0rem",
                  fontSize: ".75rem",
                }}
                className="bg-danger"
              >
                {props.cartItemsLength}
              </Badge>
            ) : (
              <></>
            )}
            &nbsp; Shopping Cart
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* conditional cart message */}
          {props.cartItemsLength === 0 ? (
            <Container
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ marginTop: "5rem" }}
            >
              <h1>
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  style={{ color: "#ffc107" }}
                  size="xl"
                />
              </h1>
              <p style={{ fontSize: "1rem" }}>
                Your cart is empty, let's fix that...
              </p>
            </Container>
          ) : (
            <Container>
              <Row>
                {props.cart.map((item) => {
                  const card = props.cards.find((card) => card.id === item);
                  return (
                    <Container key={item}>
                      <CheckoutPreviewItem
                        key={item}
                        card={card}
                        item={item}
                        remove={handleRemove}
                      />
                      <br />
                    </Container>
                  );
                })}
              </Row>
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="w-100"
            onClick={handleCheckout}
            disabled={props.cartItemsLength === 0}
          >
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default CheckoutPreview;
