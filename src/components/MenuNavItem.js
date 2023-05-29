import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuNavItem = (props) => {
  const [arrowFlag, setArrowFlag] = useState(false);
  const handleArrowFlag = (value) => {
    setArrowFlag(value);
  };
  const handleClick = () => {
    props.click(props.name);
  };
  return (
    <Container
      className="d-flex justify-content-between align-items-center"
      onMouseEnter={() => handleArrowFlag(true)}
      onMouseLeave={() => handleArrowFlag(false)}
    >
      <div>{props.name}</div>
      <FontAwesomeIcon
        icon={faAngleRight}
        style={{ cursor: "pointer" }}
        beat={arrowFlag}
        onClick={() => handleClick()}
      />
    </Container>
  );
};

export default MenuNavItem;
