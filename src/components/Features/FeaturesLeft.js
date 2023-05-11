import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";

const FeaturesLeft = (props) => {
  return (
    <Container>
      <Row className="featurette">
        <Col md={5}>
          <Image src={props.image} rounded className="featurette-image"/>
        </Col>
        <Col md={7}>
          <h2 className="featurette-heading">{props.heading}</h2>
          <p className="lead">{props.description}</p>
        </Col>
      </Row>
      <hr className="featurette-divider" />
    </Container>
  );
};

export default FeaturesLeft;
