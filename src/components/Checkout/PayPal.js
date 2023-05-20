import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Card } from "react-bootstrap";

const PayPal = (props) => {
  return (
    <>
      <CheckoutHeader title="PayPal"/>
      <Card>
        have the paypal buttons here to show what it should look like if launched
      </Card>
    </>
  );
};

export default PayPal;
