import { useState, useEffect } from "react";
import { Modal, Image, Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewIcon from "./ReviewIcon";

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

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              fluid
              rounded
              variant="top"
              src={props.image}
              onClick={() => setShow(true)}
            />
          </div>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <h4>Like this graphic?</h4>
          </Container>
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>
              <Stack direction="horizontal" gap={3} className="mt-2">
                <ReviewIcon />
              </Stack>
            </h4>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PreviewModal;
