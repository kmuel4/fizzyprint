import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import SelectBeverage from "./SelectBeverage";

const Beverage = (props) => {
  //total price
  const handleTotal = (value) => {
    props.total(value);
  };

  //send complete to parent
  const handleComplete = (value) => {
    props.complete(value);
  };

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
        <h1 style={{fontWeight: "bold"}}>Select Your Drinks</h1>
        <p>Lock-in each selection to continue.</p>
        <br />
      </Container>

      <Container
        style={{ display: "flex", justifyContent: "center" }}
      ></Container>
      <Container style={{ maxWidth: "1200px" }}>
        <p>{props.cart.length} Items</p>
        {/*print the cart contents */}
        <SelectBeverage
          cart={props.cart}
          cards={props.cards}
          remove={props.remove}
          total={handleTotal}
          complete={handleComplete}
          close={props.close}
        />
      </Container>
    </>
  );
};

export default Beverage;
