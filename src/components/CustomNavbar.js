import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import Checkout from "./Checkout/Checkout";

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

  const [show, setShow] = useState(false);
  const handleCheckout = (value) => {
    setShow(value);
  }


  return (<>
    <Navbar bg="dark" variant="dark" fixed="top" expand="md">
      <Container fluid>
        <Row className="w-100">
          <Col xs="auto">
            <Navbar.Brand
              onClick={scrollToTop}
              style={{
                cursor: "pointer",
                fontSize: "2rem",
                marginLeft: "1rem",
              }}
            >
              Fizzy Prints
            </Navbar.Brand>
          </Col>
          <Col
            xs="auto"
            className="d-flex justify-content-end"
            style={{ marginTop: "" }}
          >
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav>
                <Nav.Link onClick={() => handleIndex(0)} active={index === 0}>Home</Nav.Link>
                <Nav.Link onClick={() => handleIndex(1)} active={index === 1}>Gallery</Nav.Link>
                <Nav.Link onClick={() => handleIndex(2)} active={index === 2}>Generate</Nav.Link>
                <Nav.Link onClick={() => handleIndex(3)} active={index === 3}>About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button onClick={() => handleCheckout(true)}>
              Cart&nbsp;&nbsp;
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </Col>
        </Row>
      </Container>
    </Navbar>

    <Checkout show={show} setShow={handleCheckout}/>
    </>
  );
};

export default CustomNavbar;
