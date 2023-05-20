import { Container, Row, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BeverageCard from "./BeverageCard";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SelectBeverage = (props) => {
  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  //handle total amount
  const [totalAmount, setTotalAmount] = useState(0);
  const handleTotal = (value) => {
    setTotalAmount((prevTotal) => prevTotal + value);
    props.total(totalAmount);
  }

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
              total={handleTotal}
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
