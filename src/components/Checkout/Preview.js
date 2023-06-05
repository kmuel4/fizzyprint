import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import { useEffect } from "react";
import wordArt from "../../Images/Preview-WordArt.png";

const Preview = (props) => {
  useEffect(() => {
    props.complete(true);
  }, [props.complete]);
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{fontWeight: "bold"}}>Preview</h1>
        <br />
      </Container>
      <Container style={{ maxWidth: "1200px" }}>
        preview the graphics on the beverage. print each graphic on their
        selected can with the brand overlay on it
      </Container>
    </>
  );
};

export default Preview;
