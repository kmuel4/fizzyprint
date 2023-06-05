import { useState } from "react";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faCompassDrafting,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateGraphic = (props) => {
  //handle modal
  const [show, setShow] = useState(true);

  //close modal
  const handleClose = () => {
    setShow(false);
    props.checkoutIndex();
  };

  // Initialize checkbox states
  const [objects, setObjects] = useState(false);
  const [creatures, setCreatures] = useState(false);
  const [scenes, setScenes] = useState(false);
  const [abstractConcepts, setAbstractConcepts] = useState(false);
  const [painting, setPainting] = useState(false);
  const [photorealistic, setPhotorealistic] = useState(false);
  const [illustrationStyles, setIllustrationStyles] = useState(false);
  const [abstractAndSurreal, setAbstractAndSurreal] = useState(false);

  //initalize description text area
  const [themeDesc, setThemeDesc] = useState();
  const [aestheticDesc, setAestheticDesc] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if at least one checkbox is checked
    if (
      !(
        objects ||
        creatures ||
        scenes ||
        abstractConcepts ||
        painting ||
        photorealistic ||
        illustrationStyles ||
        abstractAndSurreal
      )
    ) {
      alert("Please check at least one checkbox.");
      return;
    }
    props.submit(true);
    handleClose();
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
            <Modal.Title className="w-100 text-center">
              Survey <FontAwesomeIcon icon={faCompassDrafting} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <p>
                We'll read your responses and tailor the next collection based
                on popular answers for each category.
              </p>
              <h5>Theme:</h5>
              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Objects"
                    onChange={(e) => setObjects(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Objects" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Creatures"
                    onChange={(e) => setCreatures(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Creatures" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Scenes"
                    onChange={(e) => setScenes(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Scenes" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="AbstractConcepts"
                    onChange={(e) => setAbstractConcepts(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Abstract Concepts" />
              </InputGroup>

              <InputGroup>
                <Form.Control
                  type="textarea"
                  rows={5}
                  placeholder="Type a detailed description here."
                  onChange={(e) => setThemeDesc(e.target.value)}
                />
              </InputGroup>

              <br />
              <h5>Aesthetic:</h5>
              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Painting"
                    onChange={(e) => setPainting(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Painting" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Photorealistic"
                    onChange={(e) => setPhotorealistic(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Photorealistic" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="IllustrationStyle"
                    onChange={(e) => setIllustrationStyles(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Illustration Styles" />
              </InputGroup>

              <InputGroup>
                <InputGroup.Text>
                  <Form.Check
                    type="checkbox"
                    value="Abstract+Surreal"
                    onChange={(e) => setAbstractAndSurreal(e.target.value)}
                  />
                </InputGroup.Text>
                <Form.Control disabled value="Abstract and Surreal" />
              </InputGroup>

              <InputGroup>
                <Form.Control
                  type="textarea"
                  rows={5}
                  placeholder="Type a detailed description here."
                  onChange={(e) => setAestheticDesc(e.target.value)}
                />
              </InputGroup>

              <br />
              <Form.Group>
                <h5>Email:</h5>
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                  required
                />
              </Form.Group>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button style={{ marginLeft: "1rem" }} type="submit">
              Submit <FontAwesomeIcon icon={faRightToBracket} />
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default CreateGraphic;
