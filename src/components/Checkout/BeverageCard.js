import React, { useState } from "react";
import { Card, Form, InputGroup, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BeverageCard = ({ card, item, handleRangeChange, quantity }) => {
    return (
      <Col key={item} xs={12} sm={6} md={4} lg={3}>
        <Card className="graphic-card">
          <div className="image-container">
            <Card.Img variant="top" src={card.image} />
          </div>
          <Card.Body>
            <Card.Title className="text-truncate">
              {card.title}
            </Card.Title>
            <Form.Group>
              <Form.Select required>
                <option defaultChecked>Brand</option>
                <option value="budlight">Budlight</option>
                <option value="whiteclaw">...</option>
                <option value="truly">...</option>
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
                <Form.Select
                  onChange={(event) => handleRangeChange(event, item)}
                >
                  <option defaultChecked>Size</option>
                  <option value="12">12 Pack</option>
                  <option value="24">24 Pack</option>
                </Form.Select>
                <InputGroup.Text>
                  {quantity || 1}x
                </InputGroup.Text>
              </InputGroup>
              <Form.Range
                min="1"
                max="10"
                step="1"
                value={quantity || 1}
                onChange={(event) => handleRangeChange(event, item)}
                className="mt-3"
              />
            </Form.Group>
            <Button variant="primary" className="w-100 mt-2">Save</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

export default BeverageCard;
