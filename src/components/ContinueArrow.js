import { faSortDown } from "@fortawesome/free-solid-svg-icons";
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
      top: "580",
      behavior: "auto",
    });
  };

  const [animate, setAnimate] = useState(false);

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
        <h1
          style={{
            position: "absolute",
            bottom: "18.5rem",
            fontSize: "2.5rem",
            zIndex: 9999,
          }}
        >
          <Container style={{display: "flex", justifyContent: "center"}}>
            <FontAwesomeIcon
              icon={faSortDown}
              size="xl"
              className="no-effect-icon"
              onClick={handleScroll}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setAnimate(true)}
              onMouseLeave={() => setAnimate(false)}
              beatFade={animate}
            />
          </Container>
        </h1>
      )}
    </Container>
  );
};

export default ContinueArrow;
