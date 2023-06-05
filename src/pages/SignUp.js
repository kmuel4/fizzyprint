import { useState } from "react";
import { Button, Modal, Form, InputGroup, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = (props) => {
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
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={false}
        centered
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center">Sign up now!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form.Text>
                For exclusive offers and notifications on new collections.
              </Form.Text>
              <InputGroup>
                <Form.Control type="email" placeholder="example@email.com" required/>
                <InputGroup.Text>
                  <Button type="submit">Subscribe</Button>
                </InputGroup.Text>
              </InputGroup>
            </Container>
            <Container style={{display: "flex", justifyContent: "center", marginTop: "1rem"}}>
              <Button
                style={{ marginLeft: "1rem" }}
                onClick={() => handleClose()}
                size="sm"
                variant="secondary"
              >
                No Thanks
              </Button>
            </Container>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
};

export default SignUp;
