import { Container, Image } from "react-bootstrap";
import paypal from "../../Images/PayPal-example.png";

const PayPal = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "2rem",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src={paypal} />
      </Container>
    </>
  );
};

export default PayPal;
