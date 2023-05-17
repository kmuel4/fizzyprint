import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faCartShopping,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CustomNavbar = (props) => {
  // scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  //change state of screen
  const [index, setIndex] = useState(0);
  const handleIndex = (value) => {
    setIndex(value);
    props.index(value);
  };

  //send navbar info to parent
  useEffect(() => {
    setIndex(props.currentIndex);
  }, [props.currentIndex]);

  //handle checkout
  const handleCheckout = () => {
    props.checkoutIndex(0);
  };

  //make cart bounce when item is added
  const [cartAnimate, setCartAnimate] = useState(false);
  useEffect(() => {
    //only animate when there is at least 1 cart item
    if (props.cartItemsLength > 0) {
      setCartAnimate(true);
      //temp change cartAnimate flag
      const timeout = setTimeout(() => {
        setCartAnimate(false);
      }, 500);

      // cleanup the timeout when the component unmounts or when the dependency changes
      return () => clearTimeout(timeout);
    }
  }, [props.cartItemsLength]);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Container fluid>
          <Row className="w-100">
            <Col xs="auto">
              {/*title */}
              <Navbar.Brand
                onClick={scrollToTop}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  marginLeft: "1rem",
                }}
              >
                Fizzy Prints
              </Navbar.Brand>
            </Col>
            <Col xs="auto" className="d-flex justify-content-end">
              {/*nav bar */}
              <Navbar.Toggle
                variant="outline-secondary"
                className="custom-navbar-toggle"
              >
                <FontAwesomeIcon icon={faCircleChevronDown} />
              </Navbar.Toggle>
              <Navbar.Collapse>
                <Nav onClick={() => scrollToTop()}>
                  <Nav.Link onClick={() => handleIndex(0)} active={index === 0}>
                    &nbsp; Home
                  </Nav.Link>
                  <Nav.Link onClick={() => handleIndex(1)} active={index === 1}>
                    &nbsp; Shop
                  </Nav.Link>
                  <Nav.Link onClick={() => handleIndex(2)} active={index === 2}>
                    &nbsp; About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col className="d-flex justify-content-end">
              {/*checkout button */}
              <Button
                onClick={() => handleCheckout()}
                style={{ maxHeight: "2.4rem" }}
              >
                {/*cart icon */}
                <FontAwesomeIcon icon={faCartShopping} bounce={cartAnimate} />
                {/*cart badge */}
                {props.cartItemsLength > 0 ? (
                  <Badge style={{ marginLeft: ".5rem" }} className="bg-danger">
                    {props.cartItemsLength}
                  </Badge>
                ) : (
                  <></>
                )}
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
