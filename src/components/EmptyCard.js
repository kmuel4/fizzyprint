import React, { useState } from "react";
import { Container, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EmptyCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    props.close();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Add More
    </Tooltip>
  );
  return (
    <Col xs={12} sm={6} md={6} lg={4}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <OverlayTrigger
          placement="top"
          delay={{ hide: 400 }}
          overlay={renderTooltip}
        >
          <h1>
            <FontAwesomeIcon
              icon={faPlus}
              size="xl"
              beat
              onClick={handleClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ cursor: "pointer" }}
            />
          </h1>
        </OverlayTrigger>
      </Container>
    </Col>
  );
};

export default EmptyCard;
