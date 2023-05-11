import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
          marginTop: "0rem",
        }}
      >
        <h2 className="featurette-heading" style={{ marginTop: "1.1rem" }}>
          Shop Gallery
        </h2>
      </Container>
      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <Row>
          {/* Render 20 identical ones for demo purposes */}
          {Array.from({ length: 20 }).map((_, index) => (
            <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <GraphicCard />
            </Col>
          ))}
        </Row>
      </Container>
      <Button
        variant="success"
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          width: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
        className="sticky"
        size="lg"
      >
        Create <FontAwesomeIcon icon={faCompassDrafting} />
      </Button>
    </>
  );
};

export default Gallery;
