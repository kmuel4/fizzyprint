import {
  Button,
  Card,
  Container,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutContents from "./CheckoutContents";

const Graphics = (props) => {
  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };
  return (
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
          <h2 className="featurette-heading">Review your selected graphics</h2>
        </Container>
        {/*print the cart contents */}
        <CheckoutContents
          cart={props.cart}
          cards={props.cards}
          remove={handleRemove}
        />
        {/*conditional rendering */}
        {props.cart.length > 0 ? (
          <>
            {/*add more to cart icon */}
            <Container style={{ display: "flex", justifyContent: "center" }}>
              <h1
                style={{
                  cursor: "pointer",
                  marginBottom: "2rem",
                }}
              >
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Add more to cart</Tooltip>}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="xl"
                    beatFade
                    onClick={() => props.close()}
                  />
                </OverlayTrigger>
              </h1>
            </Container>
          </>
        ) : (
          <>
            {/*cart is empty message */}
            <Container style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ margin: "2rem" }}>
                Your cart is empty, let's fix that....
              </p>
            </Container>
            {/*shop button */}
            <Button variant="primary" onClick={() => props.close()}>
              Return
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Graphics;
