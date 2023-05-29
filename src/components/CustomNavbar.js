import {
  Navbar,
  Container,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
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

  //handle checkout
  const handleCheckout = () => {
    props.checkoutIndex(0);
  };

  const handleMenu = () => {
    props.menu(3);
  }

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
      <Navbar bg="light" variant="dark" fixed="top" style={{padding: "1rem"}}>
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/*menu button */}
            &nbsp;
            <Col xs="auto">
              {/* menu */}
              <FontAwesomeIcon icon={faBars} size="xl" style={{cursor: "pointer"}} onClick={()=> handleMenu()}/>
              {/*search */}
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{marginLeft: "1.5rem", cursor: "pointer"}}/>
            </Col>
            <Col xs="auto" className="text-center flex-grow-1">
              {/* title */}
              <Navbar.Brand
                onClick={scrollToTop}
                style={{
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  color: "white",
                }}
              >
                <strong style={{ color: "black" }}>Fizzy Prints</strong>
              </Navbar.Brand>
            </Col>
            <Col xs="auto" className="ml-auto d-flex text-right">
              Log In
              {/* cart icon */}
              <FontAwesomeIcon
                icon={faBagShopping}
                bounce={cartAnimate}
                onClick={() => handleCheckout()}
                size="xl"
                style={{cursor: "pointer", marginLeft: "1rem"}}
              />
              {/* cart badge */}
              {props.cartItemsLength > 0 ? (
                <Badge
                  pill
                  style={{ position: "absolute", top: "1rem", right: "1.5rem" }}
                  className="bg-danger"
                >
                  {props.cartItemsLength}
                </Badge>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
