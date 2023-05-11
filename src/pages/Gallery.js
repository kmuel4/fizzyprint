import GraphicCard from "../components/GraphicCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center", marginBottom: "1rem", marginTop: "-2rem" }}>
        <h2 className="featurette-heading">Shop Gallery</h2>
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
