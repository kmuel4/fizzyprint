import React, { useState, useEffect } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faTrashAlt,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SummaryCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardStyle = {
    boxShadow: isHovered
      ? "0 0 5px rgba(0, 0, 0, 0.4)"
      : "0 0 3px rgba(0, 0, 0, 0.2)",
    marginRight: "1rem",
    minWidth: "5rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "1rem",
    marginRight: ".65rem"
  };

  return (
    <Col key={props.item} xs={12} sm={12} md={12} lg={12}>
      <Container style={{marginBottom: "-1rem"}}>
        <Card
          className="graphic-card"
          style={cardStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Graphic */}
          <div className="image-container" style={{minWidth: "4rem"}}>
            <Card.Img variant="top" src={props.card.image} />
            <strong>{props.card.title}</strong>
          </div>
          {/* Card info */}
          <Container
            className="text-muted"
            style={{ marginLeft: "1rem", minWidth: "9rem" }}
          >
            <li>Bud Light</li>
            <li>Cherry</li>
            <li>12 pack</li>
            <li>1x</li>
            <hr />
            <li>$25.99</li>
          </Container>
        </Card>
      </Container>
    </Col>
  );
};

export default SummaryCard;
