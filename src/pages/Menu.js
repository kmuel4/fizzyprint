import { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import MenuNavItem from "../components/MenuNavItem";

const Menu = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
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
    switch(value) {
        case "Home":
            return navHelper(0);
        case "Shop":
            return navHelper(1);
        case "About":
            return navHelper(2);
        default:
            return;
    }
  }

  const navHelper = (value) => {
    props.setNav(value);
    handleClose();
  }


  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        fullscreen={true}
        dialogClassName="custom-modal"
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Fizzy Prints</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <MenuNavItem name="Home" click={handleNav}/>

            <br />

            <MenuNavItem name="Shop" click={handleNav}/>
            <br />

            <MenuNavItem name="About" click={handleNav}/>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
};

export default Menu;
