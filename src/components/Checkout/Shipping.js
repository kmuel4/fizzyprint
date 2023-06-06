import { Container, Card, Form, Stack } from "react-bootstrap";
import { useEffect } from "react";

const Shipping = ({ complete }) => {
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
            </Container>
          </Card>
        </Container>
      </Container>

      <Container
        style={{
          maxWidth: "50rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/*Shipping */}
        <Container  className="w-75 mt-4" style={{ minWidth: "16rem" }}>
        <h4 style={{ fontWeight: "bold" }}>Shipping method</h4>

        <Card style={{padding: "1rem"}}>
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
                name="shipping"
                value="0.00"
                label="Free Shipping"
              />
              <span
                style={{
                  color: "black",
                }}
              >
                Free
              </span>
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
                name="shipping"
                value="0.00"
                label="Standard Shipping"
              />
              <span
                style={{
                  color: "black",
                }}
              >
                $5.00
              </span>
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
                name="shipping"
                value="0.00"
                label="Priority Shipping (3-5 Business Days)"
              />
              <span
                style={{
                  color: "black",
                }}
              >
                $15.00
              </span>
            </div>
          </Container>
        </Card>
        </Container>
      </Container>

      {/*terms */}
      <div
        className="text-muted"
        style={{
          position: "absolute",
          bottom: "0",
          left: "10px",
          right: "0",
          textAlign: "start",
          textDecoration: "underline",
          cursor: "pointer",
          fontStretch: "condensed",
          fontSize: "10px",
        }}
      >
        <br />
        Refund policy <br /> I consent to receive recurring automated marketing
        by text message through an automatic telephone dialing system. Consent
        is not a condition to purchase. STOP to cancel, HELP for help. Message
        and Data rates may apply. View Privacy Policy & ToS.
        <Stack direction="horizontal" gap={3}>
          <p>Terms of service</p> <p>Subscription policy</p>
          <p>Shop Cash</p> <p>Terms</p>
        </Stack>
      </div>
    </>
  );
};

export default Shipping;
