import { Card, Image } from "react-bootstrap";
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
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "1rem",
          borderRadius: "0px",
          marginBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>About</h1>
      </Card>
      <p>about page</p>
    </>
  );
};

export default About;
