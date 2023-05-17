import { Container, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Receipt = (props) => {
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
            <h2 className="featurette-heading">Receipt</h2>
          </Container>
          <Button onClick={()=> props.close()}>finish</Button>
        </Card>
      </Container>
    </>
  );
};

export default Receipt;
