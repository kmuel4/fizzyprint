import { Container, Row, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const SelectBeverage = (props) => {

  const [lockCount, setLockCount] = useState(0);

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
    setTotals((prevTotals) => {
      const updatedTotals = { ...prevTotals };
      delete updatedTotals[value];
      return updatedTotals;
    });
    setLockCount((prevLockCount) => prevLockCount - 1);
  };

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

  const handleLocked = () => {
    setLockCount((prevLockCount) => prevLockCount + 1);
  }

  useEffect(()=>{
    if(lockCount === props.cart.length){
      props.complete(true);
    }
  }, [lockCount])

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
              remove={handleRemove}
              total={(value) => addToTotal(card.id, value)}
              locked={handleLocked}
            />
          );
        })}
      </Row>
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
    </Container>
  );
};

export default SelectBeverage;
