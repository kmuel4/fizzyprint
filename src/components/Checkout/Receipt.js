import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import { useEffect } from "react";
import wordArt from "../../Images/Receipt-WordArt.png";

const Receipt = ({ complete }) => {
  useEffect(() => {
    complete(true);
  }, [complete]);
  
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Image src={wordArt} fluid />
      </Container>
      <Container style={{ maxWidth: "1200px" }}>
        have the invoice for the order here
      </Container>
    </>
  );
};

export default Receipt;
