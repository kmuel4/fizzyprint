import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";

const SelectBeverage = (props) => {

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
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default SelectBeverage;
