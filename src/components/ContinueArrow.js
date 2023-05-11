import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

const ContinueArrow = (props) => {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    setFlag(props.show);
  }, [props.show]);

  const handleScroll = () => {
    window.scrollTo({
      top: "620",
      behavior: "auto",
    });
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "-3rem",
        marginBottom: "2rem",
      }}
    >
      {flag && (
        <h1 style={{ position: "absolute", bottom: "2rem", fontSize: "3rem", zIndex: 9999 }}>
          <FontAwesomeIcon
            icon={faAngleDown}
            size="xl"
            className="no-effect-icon"
            onClick={handleScroll}
            beat
            style={{ cursor: "pointer" }}
          />
        </h1>
      )}
    </Container>
  );
};

export default ContinueArrow;
