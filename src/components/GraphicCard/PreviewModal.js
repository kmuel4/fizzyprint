import { useState, useEffect } from "react";
import {
  Modal,
  Image,
  Container,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreviewModal = (props) => {
  //handle modal
  const [show, setShow] = useState(false);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.setShow(false);
  };

  useEffect(() => {
    if (props.show) {
      setShow(true);
    }
  }, [props.show]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true} closeButton>
        <Modal.Header closeButton>
          <Modal.Title>Graphic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Image
              fluid
              rounded
              variant="top"
              src={props.image}
              onClick={() => setShow(true)}
            />
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Container style={{ display: "flex", justifyContent: "center" }}>
            <InputGroup style={{ maxWidth: "6rem" }}>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control placeholder={props.price} disabled />
            </InputGroup>
            <Button style={{ marginLeft: "1rem" }}>
              <FontAwesomeIcon icon={faCartPlus} />
            </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PreviewModal;
