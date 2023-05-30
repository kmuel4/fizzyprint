import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Container } from "react-bootstrap";

const Receipt = (props) => {
  props.complete(true);
  return (
    <>
      <CheckoutHeader title="Receipt"/>
      <Container style={{maxWidth: "1200px"}}>
        have the invoice for the order here
      </Container>
    </>
  );
};

export default Receipt;
