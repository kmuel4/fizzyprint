import {
  Navbar,
  Container,
  Row,
  Col,
  Badge,
  OverlayTrigger,
  Tooltip,
  Form,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import {
  faBagShopping,
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CustomNavbar = (props) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

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
  }, [targetDate]);

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

  //toggle search bar
  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  //handle log in
  const handleLogIn = () => {
    props.menu(5);
  };

  return (
    <>
      {/* countdown timer */}
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
            <span>
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          </OverlayTrigger>
        </Container>
      </Navbar>

      {/* navbar */}
      <Navbar
        bg="light"
        variant="dark"
        fixed="top"
        style={{
          padding: "1rem",
          marginTop: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* search input */}
        {showSearchInput ? (
          <Container>
            <InputGroup>
              <Form.Control type="text" placeholder="Search" />
              <InputGroup.Text>
                <FontAwesomeIcon
                  icon={faXmark}
                  size="lg"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleSearchInput()}
                />
              </InputGroup.Text>
            </InputGroup>
          </Container>
        ) : (
          <Container fluid>
            <Row
              className="w-100 align-items-center"
              style={{ flexWrap: "nowrap" }}
            >
              {/* menu and search */}
              <Col xs="auto">
                <FontAwesomeIcon
                  icon={faBars}
                  size="xl"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMenu()}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  style={{ marginLeft: "1.5rem", cursor: "pointer" }}
                  onClick={() => toggleSearchInput()}
                />
              </Col>

              {/* brand */}
              <Col xs="auto" className="text-center flex-fill">
                <span
                  onClick={scrollToTop}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    color: "white",
                  }}
                >
                  <strong style={{ color: "black" }}>Fizzy Prints</strong>
                </span>
              </Col>

              {/* log in, cart icon, badge */}
              <Col xs="auto" className="ml-auto d-flex text-right">
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleLogIn()}
                >
                  Log In
                </span>
                <FontAwesomeIcon
                  icon={faBagShopping}
                  bounce={cartAnimate}
                  onClick={() => handleCheckout()}
                  size="xl"
                  style={{ cursor: "pointer", marginLeft: "1rem" }}
                />
                {props.cartItemsLength > 0 ? (
                  <Badge
                    pill
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1.5rem",
                    }}
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
        )}
      </Navbar>
    </>
  );
};

export default CustomNavbar;
