import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import {Card} from 'react-bootstrap'
import SelectBeverage from "./SelectBeverage";

const Beverage = (props) => {
  //total price
  const handleTotal = (value) => {
    props.total(value);
  }

  const handleComplete = (value) => {
    props.complete(value);
  }

  return (
    <>
      <CheckoutHeader title="Add a beverage"/>
      <Card style={{ paddingTop: "2rem" }}>
        {/*print the cart contents */}
        <SelectBeverage
          cart={props.cart}
          cards={props.cards}
          remove={props.remove}
          total={handleTotal}
          complete={handleComplete}
        />
        </Card>
    </>
  );
};

export default Beverage;
