import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Survey</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>well give you an email reminder when new graphics release</p>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ marginLeft: "1rem" }} onClick={() => handleClose()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;
