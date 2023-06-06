import { Container, Card, Form, Stack } from "react-bootstrap";
import paypal from "../../Images/PayPal-example.png";
import { useEffect } from "react";

const PayPal = ({ complete }) => {
  useEffect(() => {
    complete(true);
  }, [complete]);

  return (
    <>
      <Container
        style={{
          marginTop: "2rem",
          maxWidth: "50rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/*information */}
        <Container className="w-75" style={{ minWidth: "16rem" }}>
          <Card style={{ padding: ".5rem" }}>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="text-muted">Contact</span>
                <span
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Change
                </span>
              </div>
              <div>
                <span style={{ color: "black" }}>example@email.com</span>
              </div>

              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="text-muted">Ship to</span>
                <span
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Change
                </span>
              </div>
              <div>
                <span style={{ color: "black" }}>350 new campus dr</span>
              </div>

              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="text-muted">Method</span>
                <span
                  style={{
                    color: "black",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Change
                </span>
              </div>
              <div>
                <span style={{ color: "black" }}>Free Shipping - Free</span>
              </div>
            </Container>
          </Card>
        </Container>
      </Container>

      <Container
        style={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="mt-4"
      >
        <Container className="w-75" style={{ minWidth: "16rem" }}>
          <h4 style={{ fontWeight: "bold" }}>Payment</h4>
          <p className="text-muted" style={{ fontSize: ".89rem" }}>
            All transactions are secure and encrypted.
          </p>
          {/*payment */}
          <Card style={{ padding: "1rem" }}>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Check
                  type="radio"
                  defaultChecked
                  name="paymentMethod"
                  label="PayPal"
                />
              </div>

              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  label="Amazon Pay"
                />
              </div>
            </Container>
          </Card>
        </Container>
      </Container>

      <Container
        style={{
          maxWidth: "50rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="mt-4"
      >
        <Container className="w-75" style={{ minWidth: "16rem" }}>
          <h4 style={{ fontWeight: "bold" }}>Billing address</h4>
          <p className="text-muted" style={{ fontSize: ".89rem" }}>
            Select the address that matches your card or payment method
          </p>

          {/*billing */}
          <Card style={{ padding: "1rem" }}>
            <Container>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Check
                  type="radio"
                  defaultChecked
                  name="billing"
                  label="Same as shipping address"
                />
              </div>

              <hr />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Check
                  type="radio"
                  name="billing"
                  label="Use a different billing address"
                />
              </div>
            </Container>
          </Card>
          <Form.Group className="mt-3">
            <Form.Check
              type="checkbox"
              label="Save my information for a faster checkout"
            />
          </Form.Group>
        </Container>
      </Container>
      {/*terms */}
      <p
        className="text-muted"
        style={{
          position: "relative",
          textAlign: "start",
          textDecoration: "underline",
          cursor: "pointer",
          fontStretch: "condensed",
          fontSize: "10px",
        }}
      >
        <br/>Refund policy <br /> I consent to receive recurring automated marketing
        by text message through an automatic telephone dialing system. Consent
        is not a condition to purchase. STOP to cancel, HELP for help. Message
        and Data rates may apply. View Privacy Policy & ToS.
        <Stack direction="horizontal" gap={3}>
          <p>Terms of service</p> <p>Subscription policy</p>
          <p>Shop Cash</p> <p>Terms</p>
        </Stack>
      </p>
    </>
  );
};

export default PayPal;
