import { Container, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";
import { useState, useEffect } from "react";
import EmptyCard from "../EmptyCard";

const SelectBeverage = (props) => {
  //initalize lock count
  const [lockCount, setLockCount] = useState([]);

  //handle lock count
  const handleLocked = (value) => {
    setLockCount((prevLockCount) => [
      ...prevLockCount,
      { key: value, locked: false },
    ]);
  };

  // remove from cart
  const handleRemove = (value) => {
    props.remove(value);

    // remove from array
    setTotals((prevTotals) => {
      const updatedTotals = { ...prevTotals };
      delete updatedTotals[value];
      return updatedTotals;
    });

    // update cart size
    setCartSize((prevCartSize) => prevCartSize - 1);

    // update lock count
    setLockCount((prevLockCount) => {
      const updatedLockCount = prevLockCount.filter(
        (item) => item.key !== value
      );
      return updatedLockCount;
    });
  };

  //array to hold card id and card total
  const [totals, setTotals] = useState({});
  const addToTotal = (cardId, total) => {
    setTotals((prevTotals) => ({
      ...prevTotals,
      [cardId]: total,
    }));
  };

  // calculate the sum of totals and send to parent
  useEffect(() => {
    const sum = Object.values(totals)
      .map(parseFloat) // convert to numbers
      .reduce((acc, curr) => acc + curr, 0);
    props.total(sum.toFixed(2));
  }, [totals, props.total]);

  //initialize cart size
  const [cartSize, setCartSize] = useState(props.cart.length);

  //allow continue when all cards are locked
  useEffect(() => {
    if (cartSize > 0 && lockCount.length === cartSize) {
      props.complete(true);
    } else {
      props.complete(false);
    }
  }, [lockCount.length, cartSize]);

  return (
    <Container style={{ maxWidth: "1200px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {props.cart.map((item) => {
          const card = props.cards.find((card) => card.id === item);
          return (
            <BeverageCard
              key={item}
              card={card}
              item={item}
              remove={handleRemove}
              total={(value) => addToTotal(card.id, value)}
              locked={()=>handleLocked(card.id)}
            />
          );
        })}
        <EmptyCard close={props.close}/>
      </div>
    </Container>
  );
};

export default SelectBeverage;
