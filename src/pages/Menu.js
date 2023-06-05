import React, { useState } from "react";
import { Offcanvas, Form, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import MenuNavItem from "../components/MenuNavItem";
import {
  faStore,
  faCompassDrafting,
  faCircleInfo,
  faPaperPlane,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  // handle offcanvas
  const [show, setShow] = useState(true);

  // close offcanvas
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    props.submit(true);
  };

  const handleNav = (value) => {
    switch (value) {
      case "Home":
        return navHelper(0);
      case "Shop":
        return navHelper(1);
      case "About":
        return navHelper(2);
      case "Sign Up":
        return modalHelper(2);
      case "Survey":
        return modalHelper(1);
      case "Log In":
        return modalHelper(5);
      default:
        return;
    }
  };

  const navHelper = (value) => {
    props.setNav(value);
    handleClose();
  };

  const modalHelper = (value) => {
    setShow(false);
    props.checkoutIndex(value);
  };

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Form onSubmit={handleSubmit}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ fontWeight: "bold" }}>
              Fizzy Prints
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MenuNavItem name="Home" click={handleNav} icon={faHouse} />
            <br />
            <MenuNavItem name="Shop" click={handleNav} icon={faStore} />
            <br />
            <MenuNavItem name="About" click={handleNav} icon={faCircleInfo} />
            <hr />
            <MenuNavItem name="Sign Up" click={handleNav} icon={faPaperPlane} />
            <br />
            <MenuNavItem
              name="Survey"
              click={handleNav}
              icon={faCompassDrafting}
            />
            <br />
            <MenuNavItem name="Log In" click={handleNav} icon={faUser} />
            <hr />
            <Container style={{ textDecoration: "underline" }}>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{color: "black"}} target="_blank">Help</a>
            </Container>
          </Offcanvas.Body>
        </Form>
      </Offcanvas>
    </>
  );
};

export default Menu;
