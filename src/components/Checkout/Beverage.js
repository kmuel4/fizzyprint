import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import {Card} from 'react-bootstrap'
import SelectBeverage from "./SelectBeverage";

const Beverage = (props) => {
  return (
    <>
      <CheckoutHeader title="Select your beverage"/>
      <Card style={{ paddingTop: "2rem" }}>
        {/*print the cart contents */}
        <SelectBeverage
          cart={props.cart}
          cards={props.cards}
        />
        </Card>
    </>
  );
};

export default Beverage;
