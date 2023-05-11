import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import image1 from "../../Images/image4.png";

const FeaturesRight = (props) => {
  return (
    <Container>
      <Row className="featurette">
        <Col md={7}>
          <h2 className="featurette-heading">
            {props.heading}
          </h2>
          <p className="lead">
            {props.description}
          </p>
        </Col>
        <Col md={5}>
          {/* Replace the SVG with an appropriate image */}
          <Image src={image1} width="275px" height="auto" />
        </Col>
      </Row>
      <hr className="featurette-divider" />
    </Container>
  );
};

export default FeaturesRight;
