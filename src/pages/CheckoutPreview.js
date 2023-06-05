import React, { useState } from "react";
import {
  Offcanvas,
  Button,
  Badge,
  Container,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faBagShopping,
  faTriangleExclamation,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutPreviewItem from "../components/Checkout/CheckoutPreviewItem";

const CheckoutPreview = (props) => {
  // handle offcanvas
  const [show, setShow] = useState(true);

  // close offcanvas
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
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title style={{ fontWeight: "bold" }}>
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
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
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
          <Container style={{ marginBottom: "3rem" }}>
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
        <Container
          style={{
            position: "absolute",
            bottom: "0rem",
            right: "0rem",
            backgroundColor: "white",
            padding: "1rem",
          }}
        >
          <Button
            className="w-100"
            onClick={handleCheckout}
            disabled={props.cartItemsLength === 0}
          >
            Checkout&nbsp;
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default CheckoutPreview;
