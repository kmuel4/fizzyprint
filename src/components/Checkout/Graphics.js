import { Card, Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutContents from "./CheckoutContents";
import "../../main.css";
import CheckoutHeader from "./CheckoutHeader";

const Graphics = (props) => {
  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };
  return (
    <Container fluid>

      <CheckoutHeader title="Review your selected graphics"/>

      <Card style={{ paddingTop: "2rem" }}>
        {/*print the cart contents */}
        <CheckoutContents
          cart={props.cart}
          cards={props.cards}
          remove={handleRemove}
        />
        {/*conditional rendering */}
        {props.cart.length === 0 && (
          <>
            {/*cart is empty message */}
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Stack
                direction="vertical"
                gap={1}
                align="center"
                style={{ padding: "1rem" }}
              >
                <h1>
                  <FontAwesomeIcon
                    icon={faTriangleExclamation}
                    style={{ color: "#ffc107" }}
                    size="xl"
                  />
                </h1>
                <p style={{marginBottom: "2rem"}}>Your cart is empty, let's fix that....</p>
              </Stack>
            </Container>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Graphics;
