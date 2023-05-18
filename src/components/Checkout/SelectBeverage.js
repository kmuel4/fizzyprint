import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";

const SelectBeverage = (props) => {
  //handle quantity of order
  const [quantities, setQuantities] = useState({});

  //handle change of quantity
  const handleRangeChange = (event, item) => {
    const selectedValue = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: selectedValue,
    }));
  };

  return (
    <Container>
      <Row>
        {props.cart.map((item) => {
          const card = props.cards.find((card) => card.id === item);
          return (
            <BeverageCard
              key={item}
              card={card}
              item={item}
              handleRangeChange={handleRangeChange}
              quantity={quantities[item]}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default SelectBeverage;
