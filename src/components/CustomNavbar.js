import {
  Navbar,
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faBagShopping,
  faList,
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

  //date countdown for new drop
  const targetDate = new Date("September 1, 2023 00:00:00").getTime();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeRemaining < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTooltip = (props) => (
    <Tooltip {...props}>New collection countdown</Tooltip>
  );

  //handle checkout
  const handleCheckout = () => {
    props.checkoutIndex(4);
  };

  //display nav menu
  const handleMenu = () => {
    props.menu(3);
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
      <Navbar bg="primary" fixed="top" style={{ height: "2rem" }}>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <OverlayTrigger
            placement="bottom"
            delay={{ hide: 200 }}
            overlay={renderTooltip}
          >
            <div>
              {days}d {hours}h {minutes}m {seconds}s
            </div>
          </OverlayTrigger>
        </Container>
      </Navbar>
      <Navbar
        bg="light"
        variant="dark"
        fixed="top"
        style={{ padding: "1rem", marginTop: "2rem" }}
      >
        <Container fluid>
          <Row className="w-100 align-items-center">
            {/*menu button */}
            &nbsp;
            <Col xs="auto">
              {/* menu */}
              <FontAwesomeIcon
                icon={faList}
                size="xl"
                style={{ cursor: "pointer" }}
                onClick={() => handleMenu()}
              />
              {/*search */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                style={{ marginLeft: "1.5rem", cursor: "pointer" }}
              />
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
              <span style={{ cursor: "pointer" }}>Log In</span>
              {/* cart icon */}
              <FontAwesomeIcon
                icon={faBagShopping}
                bounce={cartAnimate}
                onClick={() => handleCheckout()}
                size="xl"
                style={{ cursor: "pointer", marginLeft: "1rem" }}
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
