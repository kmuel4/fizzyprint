import React, { useState, useEffect } from "react";
import { Card, Form, InputGroup, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeverageCard = (props) => {
  //handle quantity of order
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const [saved, setSaved] = useState(false);
  const handleSaved = (event) => {
    event.preventDefault();
    setSaved(!saved);
  };

  const [basePrice, setBasePrice] = useState(20.99);

  const [price, setPrice] = useState(0);
  useEffect(()=>{
    setPrice(basePrice*quantity);
  },[quantity]);

  const [subtotal, setSubtotal] = useState(0);

  return (
    <Col key={props.item} xs={12} sm={6} md={4} lg={3}>
      <Card className="graphic-card">
        <div className="image-container">
          <Card.Img variant="top" src={props.card.image} />
        </div>
        <Form onSubmit={handleSaved}>
          <Card.Body>
            <Card.Title className="text-truncate">
              {props.card.title}
            </Card.Title>
            <Form.Group className="mt-2 mb-2">
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder="4.99" disabled />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Select required>
                <option defaultChecked>Brand</option>
                <option value="budlight">Budlight</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-2" required>
              <Form.Select>
                <option defaultChecked>Flavor</option>
                <option value="blackcherry">Black Cherry</option>
                <option value="lemonlime">Lemon Lime</option>
                <option value="strawberry">Strawberry</option>
                <option value="mango">Mango</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mt-2" required>
              <InputGroup>
                <Form.Select>
                  <option defaultChecked>Pack</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                </Form.Select>
                <InputGroup.Text>{quantity}x</InputGroup.Text>
              </InputGroup>
              <Form.Range
                min="1"
                max="10"
                step="1"
                value={quantity || 1}
                onChange={handleQuantityChange}
                className="mt-3"
              />
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Beverage:</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder={price} disabled />
              </InputGroup>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Total:</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control placeholder={price} disabled />
              </InputGroup>
            </Form.Group>
            <Button
              variant={saved ? "success" : "primary"}
              className="w-100 mt-2"
              type="submit"
            >
              {saved ? <FontAwesomeIcon icon={faCircleCheck} /> : "Save"}
            </Button>
            <Button
              variant="danger"
              className="w-100 mt-2"
            >
Remove
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </Col>
  );
};

export default BeverageCard;
