import { Container } from "react-bootstrap";

const About = () => {
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
          What is Fizzy Print?
        </h2>
      </Container>
  );
};

export default About;
