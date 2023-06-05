import { Container, Image } from "react-bootstrap";
import paypal from "../../Images/PayPal-example.png";
import { useEffect } from "react";

const PayPal = ({ complete }) => {
  useEffect(() => {
    complete(true);
  }, [complete]);

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
        <h1 style={{fontWeight: "bold"}}>Payment</h1>
      </Container>
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
