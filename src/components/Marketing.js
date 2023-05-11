import { Col, Button, Figure } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Marketing = (props) => {
  return (
    <Col lg={4}>
      <Figure>
        <Figure.Image
          width={140}
          height={140}
          src={props.image}
          roundedCircle
          className="shadow"
          fluid
        />
        <Figure.Caption>
          <h2>{props.company}</h2>
          <p>
            {props.caption}
          </p>
          <p>
            <Button variant="primary" href={props.site} target="_blank">
              Visit site <FontAwesomeIcon icon={faRightToBracket} />
            </Button>
          </p>
        </Figure.Caption>
      </Figure>
    </Col>
  );
};

export default Marketing;
