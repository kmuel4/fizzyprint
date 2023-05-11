import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faCartShopping,
  faCircleChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CustomNavbar = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const [index, setIndex] = useState(0);
  const handleIndex = (value) => {
    setIndex(value);
    props.index(value);
  };

  useEffect(() => {
    setIndex(props.currentIndex);
  }, [props.currentIndex]);

  const handleCheckout = () => {
    props.checkoutIndex(0);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" expand="md">
        <Container fluid>
          <Row className="w-100">
            <Col xs="auto">
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
                    &nbsp; Create
                  </Nav.Link>
                  <Nav.Link onClick={() => handleIndex(3)} active={index === 3}>
                    &nbsp; About
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                onClick={() => handleCheckout()}
                style={{ maxHeight: "2.4rem" }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
