import { Container, Row, Col, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const SelectBeverage = (props) => {
  //initalize lock count
  const [lockCount, setLockCount] = useState(0);

  //increment lock count
  const handleLocked = () => {
    setLockCount((prevLockCount) => prevLockCount + 1);
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);

    //remove from array
    setTotals((prevTotals) => {
      const updatedTotals = { ...prevTotals };
      delete updatedTotals[value];
      return updatedTotals;
    });
    //update cart size
    setCartSize((prevCartSize) => prevCartSize - 1);
    //update lock count
    if (lockCount > 0) {
      setLockCount((prevLockCount) => prevLockCount - 1);
    }
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
    if (cartSize > 0 && lockCount === cartSize) {
      props.complete(true);
    } else {
      props.complete(false);
    }
  }, [lockCount, cartSize]);

  return (
    <Container style={{maxWidth: "1200px"}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        {props.cart.map((item) => {
          const card = props.cards.find((card) => card.id === item);
          return (
            <BeverageCard
              key={item}
              card={card}
              item={item}
              remove={handleRemove}
              total={(value) => addToTotal(card.id, value)}
              locked={handleLocked}
            />
          );
        })}
      </div>
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
              <p style={{ marginBottom: "2rem" }}>
                Your cart is empty, let's fix that....
              </p>
            </Stack>
          </Container>
        </>
      )}
      <p>cart size: {cartSize} locked count: {lockCount}</p>
    </Container>
  );
};

export default SelectBeverage;
