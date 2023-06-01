import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import { Container, Image } from "react-bootstrap";
import SelectBeverage from "./SelectBeverage";
import wordArt from "../../Images/BeverageSelection-WordArt.png";

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
      <Container style={{display: "flex", justifyContent: "center"}}>
        <Image src={wordArt} fluid />
      </Container>

      <Container style={{ display: "flex", justifyContent: "center" }}>
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
