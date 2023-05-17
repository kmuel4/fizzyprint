import { Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PayPal = (props) => {
  return (
    <>
      <Container fluid>
        <Card
          style={{
            paddingTop: "2rem",
            minHeight: "100%",
          }}
        >
          {/*title */}
          <Container
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
            }}
          >
            <h2 className="featurette-heading">PayPal</h2>
          </Container>
        </Card>
      </Container>
    </>
  );
};

export default PayPal;
