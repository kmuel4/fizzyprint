import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Container } from "react-bootstrap";

const PayPal = (props) => {
  props.complete(true);
  return (
    <>
      <CheckoutHeader title="PayPal"/>
      <Container style={{maxWidth: "1200px"}}>
        have the paypal buttons here to show what it should look like if launched
      </Container>
    </>
  );
};

export default PayPal;
