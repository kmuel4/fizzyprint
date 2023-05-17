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
import { faCartPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PreviewModal = (props) => {
  //handle modal
  const [show, setShow] = useState(false);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.setShow(false);
  };

  //handle showing modal
  useEffect(() => {
    if (props.show) {
      setShow(true);
    }
  }, [props.show]);

  //add to cart
  const handleAdd = () => {
    props.add();
  };

  //remove from cart
  const handleRemove = () => {
    props.remove();
  };

  //handle clicking add button
  const [add, setAdd] = useState(false);
  const handleClick = () => {
    if (!add) {
      handleAdd();
      props.previewToggle();
    } else {
      handleRemove();
      props.previewToggle();
    }
    setAdd(!add);
  };

  //get state from parent
  useEffect(() => {
    setAdd(props.cartToggle);
  }, [props.cartToggle]);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
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
            {/*price */}
            <InputGroup style={{ maxWidth: "6rem" }}>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control placeholder={props.price} disabled />
            </InputGroup>
            {/*cart toggle button */}
            <Button
              style={{ marginLeft: "1rem" }}
              onClick={handleClick}
              variant={!add ? "primary" : "success"}
            >
              {!add ? (
                <FontAwesomeIcon icon={faCartPlus} />
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </>
              )}
            </Button>
          </Container>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PreviewModal;
