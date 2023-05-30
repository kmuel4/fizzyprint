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
import { faTrashAlt, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeverageCard = (props) => {
  // handle quantity of order
  const [quantity, setQuantity] = useState(1);

  // save changes
  const [locked, setlocked] = useState(false);
  const handlelocked = (event) => {
    event.preventDefault();
    setlocked(true);
    props.locked(true);
    setActiveKey(null);
  };

  // base price of beverage
  const basePrice = 20.99;

  // change price dynamically when quantity changes
  const [price, setPrice] = useState(0);
  useEffect(() => {
    setPrice((basePrice * quantity).toFixed(2));
  }, [quantity]);

  // change total dynamically when price changes
  const [total, setTotal] = useState(25.98);
  useEffect(() => {
    setTotal((parseFloat(price) + 4.99).toFixed(2));
  }, [price, total]);

  //send total to parent when locked
  useEffect(()=>{
    if(locked){
      props.total(total);
    }
  }, [locked, total])
  // remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  // lock accordion
  const [activeKey, setActiveKey] = useState(null);
  const handleAccordionSelect = (eventKey) => {
    if(!locked){
      setActiveKey(eventKey);
    }
  };

  return (
    <Col key={props.item} xs={12} sm={6} md={4} lg={3}>
      <Card className="graphic-card">
        {/* graphic */}
        <div className="image-container">
          <Card.Img variant="top" src={props.card.image} />
        </div>
        <Form onSubmit={handlelocked}>
          <Card.Body>
            {/* graphic name */}
            <Card.Title className="text-truncate">
              {props.card.title}
            </Card.Title>

            {/* beverage accordion */}
            <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Beverage</Accordion.Header>
                <Accordion.Body>
                  {/* graphic price */}
                  <Form.Group className="mt-2 mb-2">
                    <Form.Label>Graphic:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder="4.99" disabled />
                    </InputGroup>
                  </Form.Group>

                  {/* brand */}
                  <Form.Group>
                    <FloatingLabel label="Brand">
                      <Form.Select required>
                        <option value="budlight">Budlight</option>
                        <option value="whiteclaw">Whiteclaw</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>

                  {/* flavor */}
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

                  {/* quantity */}
                  <Form.Group className="mt-2">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control
                      type="number"
                      defaultValue="1"
                      min="1"
                      max="10"
                      step="1"
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                  </Form.Group>

                  {/* beverage price */}
                  <Form.Group className="mt-2">
                    <Form.Label>Beverage:</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>$</InputGroup.Text>
                      <Form.Control placeholder={price} disabled />
                    </InputGroup>
                  </Form.Group>

                  {/* total price */}
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

            {/* save button */}
            <Button
              variant={locked ? "success" : "primary"}
              className="w-100 mt-2"
              type="submit"
            >
              {locked ? <FontAwesomeIcon icon={faLock} /> : <FontAwesomeIcon icon={faLockOpen} />}
            </Button>

            {/* remove button */}
            <Button
              variant="danger"
              className="w-100 mt-2"
              onClick={() => handleRemove(props.card.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </Card.Body>
        </Form>
      </Card>
    </Col>
  );
};

export default BeverageCard;
