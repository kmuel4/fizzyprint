import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";

const CheckoutHeader = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "1rem",
          marginTop: "0rem",
        }}
      >
        <h2 className="checkout-heading">{props.title}</h2>
      </Container>
    </Card>
  );
};

export default CheckoutHeader;