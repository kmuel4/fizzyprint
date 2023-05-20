import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Card } from "react-bootstrap";

const Receipt = (props) => {
  return (
    <>
      <CheckoutHeader title="Receipt"/>
      <Card>
        have the invoice for the order here
      </Card>
    </>
  );
};

export default Receipt;
