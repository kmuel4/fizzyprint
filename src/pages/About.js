import { Container } from "react-bootstrap";
import { useEffect } from "react";

const About = () => {
  // scroll to top of page on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem",
        marginTop: "0rem",
      }}
    >
      <h2 className="featurette-heading" style={{ marginTop: "1.1rem" }}>
        About
      </h2>
    </Container>
  );
};

export default About;
