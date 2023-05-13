import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
    </>
  );
};

export default Gallery;
