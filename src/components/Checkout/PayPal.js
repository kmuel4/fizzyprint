import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Image } from "react-bootstrap";
import { useEffect } from "react";
import wordArt from "../../Images/PayPal-WordArt.png";

const PayPal = (props) => {
  useEffect(() => {
    props.complete(true);
  }, [props.complete]);
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Image src={wordArt} fluid />
      </Container>
      <Container style={{ maxWidth: "1200px" }}>
        have the paypal buttons here to show what it should look like if
        launched
      </Container>
    </>
  );
};

export default PayPal;
