import { Container, Image } from "react-bootstrap";
import { useEffect } from "react";
import wordArt from "../Images/About-WordArt.png";

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
    <>
      <hr />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>About</h1>
      </Container>
      <hr />
      <p>about page</p>
    </>
  );
};

export default About;
