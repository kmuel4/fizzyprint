import React, { useState, useEffect } from "react";
import {
  Card,
  Form,
  InputGroup,
  Col,
  Button,
  FloatingLabel,
  Accordion,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrashCan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeverageCard = (props) => {
  //handle quantity of order
  const [quantity, setQuantity] = useState(1);

  //quantity of beverage
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  //save changes
  const [saved, setSaved] = useState(false);
  const handleSaved = (event) => {
    event.preventDefault();
    setSaved(!saved);
  };

  //base price of beverage
  const [basePrice] = useState(20.99);

  //change price dynamically when quantity changes
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice((basePrice * quantity).toFixed(2));
  }, [quantity, basePrice]);

  //change total dynamically when price changes
  const [total, setTotal] = useState(25.98);
  useEffect(() => {
    setTotal((parseFloat(price) + 4.99).toFixed(2));
    props.total(total);
    console.log(total);
  }, [price]);

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  return (
    <Col key={props.item} xs={12} sm={6} md={4} lg={3}>
      <Card className="graphic-card">
        {/*graphic */}
        <div className="image-container">
          <Card.Img variant="top" src={props.card.image} />
        </div>
        <Form onSubmit={handleSaved}>
          <Card.Body>
            {/*graphic name */}
            <Card.Title className="text-truncate">
              {props.card.title}
            </Card.Title>
            {/*beverage accordion */}
            <Accordion defaultActiveKey={null}>
              <Accordion.Item eventkey="0">
                <Accordion.Header>Beverage</Accordion.Header>
                <Accordion.Body>
                  {/*graphic price */}
                  <Form.Group className="mt-2 mb-2">
                    <Form.Label>Graphic:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder="4.99" disabled />
                    </InputGroup>
                  </Form.Group>

                  {/*brand */}
                  <Form.Group>
                    <FloatingLabel label="Brand">
                      <Form.Select required>
                        <option value="budlight">Budlight</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  {/*flavor */}
                  <Form.Group className="mt-2" required>
                    <FloatingLabel label="Flavor">
                      <Form.Select>
                        <option value="blackcherry">Black Cherry</option>
                        <option value="lemonlime">Lemon Lime</option>
                        <option value="strawberry">Strawberry</option>
                        <option value="mango">Mango</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  {/*quantity */}
                  <Form.Group className="mt-2">
                      <Form.Label>Quantity:</Form.Label>
                      
                        <Form.Control
                          type="number"
                          defaultValue="1"
                          min="1"
                          max="10"
                          step="1"
                          onChange={(e) => setQuantity(e.target.value)}
          
                        />
                  </Form.Group>

                  {/*beverage price */}
                  <Form.Group className="mt-2">
                    <Form.Label>Beverage:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder={price} disabled />
                    </InputGroup>
                  </Form.Group>

                  {/*total price */}
                  <Form.Group className="mt-2">
                    <Form.Label>Total:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder={total} disabled />
                    </InputGroup>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/*save button */}
            <Button
              variant={saved ? "success" : "primary"}
              className="w-100 mt-2"
              type="submit"
            >
              {saved ? <FontAwesomeIcon icon={faCircleCheck} /> : "Save"}
            </Button>

            {/*remove button */}
            <Button
              variant="danger"
              className="w-100 mt-2"
              onClick={() => handleRemove(props.card.id)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </Col>
  );
};

export default BeverageCard;
