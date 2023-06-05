import { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
      onClick={() => handleClick()}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={props.icon} />
        <div style={{marginLeft: "1rem"}}>{props.name}</div>
      </div>
      {props.name === "Sign Up" || props.name === "Survey" || props.name === "Log In" ? (
        <>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ cursor: "pointer" }}
            beat={arrowFlag}
          />
        </>
      ) : null}
    </Container>
  );
};

export default MenuNavItem;
