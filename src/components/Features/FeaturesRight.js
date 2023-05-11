import {
  Container,
  Row,
  Col,
  Image,
  Figure,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";

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
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            role="img"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee" />
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </Col>
      </Row>
      <hr className="featurette-divider" />
    </Container>
  );
};

export default FeaturesRight;
