import { useState } from "react";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  Container,
  FloatingLabel,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../Images/SignInSocialMedia.png";

const LogIn = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.modalIndex();
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    //props.submit(true);
  };

  //handle showing or hiding password
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPass = () => {
    setShowPassword(!showPassword);
  };

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
            {/*title */}
            <Modal.Title className="w-100 text-center">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {/*desc */}
              <p>
                Log in for <strong>faster checkout</strong> and access to your
                previous orders.
              </p>
              {/*email */}
              <FloatingLabel label="Email" className="mb-2">
                <Form.Control type="text" placeholder="Email" required />
              </FloatingLabel>

              {/*password */}
              <InputGroup>
                <FloatingLabel label="Password">
                  <Form.Control
                    type={!showPassword ? "password" : "text"}
                    placeholder="Password"
                    required
                  />
                </FloatingLabel>

                {/*toggle show password */}
                <InputGroup.Text
                  style={{ cursor: "pointer" }}
                  onClick={() => handleShowPass()}
                >
                  {showPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{ padding: ".05rem" }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </InputGroup.Text>
              </InputGroup>

              {/*forgot password */}
              <Form.Text
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                Forgot Password?
              </Form.Text>

              {/*log in button */}
              <Container className="mt-3">
                <Button className="w-100" type="submit">
                  Log In
                </Button>
              </Container>

              {/*alt log in methods */}
              <Container style={{ display: "flex", justifyContent: "center", cursor: "pointer" }}>
                <Image fluid src={image} />
              </Container>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            {/*sign up */}
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "-.5rem",
              }}
            >
              <p>
                Don't Have An Account? <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">Sign Up</a>
              </p>
            </Container>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default LogIn;
