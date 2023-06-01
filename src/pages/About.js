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
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "3rem",
        marginTop: "0rem",
      }}
    >
      <Image src={wordArt} fluid/>
    </Container>
  );
};

export default About;
