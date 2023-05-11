import GraphicCard from "../components/GraphicCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Gallery = () => {
  return (
    <>
      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <Row>
          {/*render 20 identical ones for demo purposes */}
          {Array.from({ length: 20 }).map((_, index) => (
            <Col xs={6} sm={6} md={4} lg={4} key={index}>
              <GraphicCard />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
