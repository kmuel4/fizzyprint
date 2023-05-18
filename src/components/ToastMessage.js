import { Toast, ToastContainer, ProgressBar } from "react-bootstrap";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const ToastMessage = (props) => {
  //show toast
  const [show, setShow] = useState(false);

  //handle closing
  const handleClose = () => {
    setShow(false);
    props.setShow(false);

    setProgress(100);
  };

  //update based on props
  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  //handle progress interval timer
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress - 1);
      }, 30); //speed

      setTimeout(() => {
        //hide toast afterwards
        handleClose();
        clearInterval(interval);
      }, 3500); // total duration

      return () => clearInterval(interval);
    }
  }, [show]);

  return (
    <ToastContainer className="p-3" position="top-start">
      <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Header>
          <strong className="me-auto">
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#0df834" }}
              size="xl"
            />
            &nbsp;{props.message}
          </strong>
          <small>now</small>
        </Toast.Header>
        <Toast.Body>
          <ProgressBar now={progress} />
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastMessage;
