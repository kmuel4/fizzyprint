import { Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../main.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <hr className="featurette-divider" style={{ marginBottom: "2rem", marginTop: "1rem" }} />

      <Container style={{ marginBottom: "3rem" }}>
        <div className="d-flex justify-content-between w-100">
          <span>
            &copy; 2023 Fizzy Prints, Inc. &middot; Privacy &nbsp; &middot;
            Terms
          </span>

          <div className="d-flex justify-content-end">
            <span>
              <Button
                variant="secondary"
                onClick={scrollToTop}
                style={{
                  maxHeight: "2.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  marginTop: "-.25rem",
                }}
                size="sm"
              >
                <span
                  style={{
                    display: "inline-block",
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Back to top&nbsp;
                  <FontAwesomeIcon icon={faArrowTurnUp} size="sm" />
                </span>
              </Button>
            </span>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
