import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
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
      <CheckoutHeader title="Beverage Selection" />
      <Container style={{display: 'flex', justifyContent: 'center'}}>
        <p>Lock-in each selection to continue.</p>
      </Container>
      <Container style={{ maxWidth: "1200px" }}>
        {/*print the cart contents */}
        <SelectBeverage
          cart={props.cart}
          cards={props.cards}
          remove={props.remove}
          total={handleTotal}
          complete={handleComplete}
        />
      </Container>
    </>
  );
};

export default Beverage;
