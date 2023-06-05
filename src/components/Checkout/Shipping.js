import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wordArt from "../../Images/Shipping-WordArt.png";

const Shipping = (props) => {
  //handle billing name
  const [billingFirst, setBillingFirst] = useState("");

  //handle billing last
  const [billingLast, setBillingLast] = useState("");

  //handle address1
  const [address1, setAddress1] = useState("");

  //handle address2
  const [address2, setAddress2] = useState("");

  //handle city
  const [city, setCity] = useState("");

  //handle zip code
  const [zip, setZip] = useState();
  const handleZipChange = (event) => {
    const value = event.target.value;
    if (value.length <= 5) {
      setZip(event.target.value);
    } else {
      event.target.value = event.target.value.slice(0, 5);
    }
  };

  //initialize phone
  const [phone, setPhone] = useState("");

  //format phone
  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // remove non-numeric characters
    let formattedInput = "";
    if (input.length > 0) {
      formattedInput = "(" + input.slice(0, 3);
    }
    if (input.length > 3) {
      formattedInput += ") " + input.slice(3, 6);
    }
    if (input.length > 6) {
      formattedInput += "-" + input.slice(6, 10);
    }
    setPhone(formattedInput);
  };

  const [save, setSave] = useState(false);
  const handleSave = (event) => {
    event.preventDefault();
    setSave(!save);
  };

  useEffect(() => {
    if (save) {
      props.complete(true);
    } else {
      props.complete(false);
    }
  }, [save, props]);

  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{fontWeight: "bold"}}>Shipping</h1>
        <br />
      </Container>
      <Container style={{ maxWidth: "50rem" }}>
        <Form onSubmit={handleSave}>
          <Row className="mb-3">
            {/*first name */}
            <Form.Group as={Col} controlId="First">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                tabIndex={5}
                required
                placeholder="Enter First"
                value={billingFirst}
                onChange={(e) => setBillingFirst(e.target.value)}
              />
            </Form.Group>

            {/*last name */}
            <Form.Group as={Col} className="mt-2" controlId="Last">
              <Form.Label></Form.Label>
              <Form.Control
                tabIndex={6}
                required
                placeholder="Enter Last"
                value={billingLast}
                onChange={(e) => setBillingLast(e.target.value)}
              />
            </Form.Group>
          </Row>

          {/*address */}
          <Form.Group controlId="Address">
            <Form.Label>Address*</Form.Label>
            <Form.Control
              tabIndex={7}
              required
              placeholder="1234 Main St"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 mt-3" controlId="Address2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Form.Group>

          {/*city */}
          <Row>
            <Form.Group as={Col} controlId="City">
              <Form.Label>City*</Form.Label>
              <Form.Control
                tabIndex={8}
                pattern="[a-zA-Z]+"
                required
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>

            {/*state */}
            <Form.Group as={Col} controlId="State">
              <Form.Label>State*</Form.Label>
              <Form.Select required defaultValue={null}>
                <option>NY</option>
                <option disabled>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/*zip */}
          <Row className="mt-3">
            <Form.Group as={Col} controlId="zip">
              <Form.Label>Zip*</Form.Label>
              <Form.Control
                tabIndex={9}
                required
                placeholder="Enter Zip"
                pattern="[0-9]{5}"
                value={zip}
                onChange={handleZipChange}
              />
            </Form.Group>

            {/*country */}
            <Form.Group as={Col} controlId="Country">
              <Form.Label>Country*</Form.Label>
              <Form.Select required defaultValue={null}>
                <option>United States</option>
                <option disabled>...</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {/*phone number */}
          <Form.Group className="mb-3 mt-3" controlId="Phone">
            <Form.Label>Phone Number*</Form.Label>
            <Form.Control
              type="tel"
              placeholder="(123) 456-7890"
              value={phone}
              onChange={handlePhoneChange}
              required
              minLength="14"
              tabIndex={10}
            />
          </Form.Group>
          {/*save button */}
          <Button
            className="w-100"
            type="submit"
            variant={save ? "success" : "primary"}
          >
            {save ? <FontAwesomeIcon icon={faCircleCheck} /> : "Save"}
          </Button>
          <Form.Label className="text-muted">
            *Shipping in 7-10 business days.
          </Form.Label>
        </Form>
      </Container>
    </>
  );
};

export default Shipping;
