import { Carousel, Button, Image, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import image1 from "../../Images/collage1.jpg";
import image2 from "../../Images/collage2.jpg";
import image3 from "../../Images/collage3.jpg";
import {
  faCompassDrafting,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainCarousel = (props) => {
  //handle modal
  const handleModal = (value) => {
    props.handleModal(value);
  };

  return (
    <Carousel style={{ backgroundColor: "grey", marginTop: "4rem" }}>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src={image1} alt="image1" className="mx-auto" height="550px" />
        </div>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <div className="outline-text">
            <h1>Get unique A.I. graphics on your favorite seltzer.</h1>
            <p>
              Choose any graphic from our unique and limited collection. Don't like what
              you see? Sign up for emails and we'll send you a message when a new collection
              drops.
            </p>
            <Button
                variant="primary"
                onClick={() => handleModal(2)}
              >
                Sign up <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src={image2} alt="image1" className="mx-auto" height="550px" />
        </div>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <div className="outline-text">
            <h1>Browse our limited edition graphics in the Gallery</h1>
            <p>
              We generate our graphics based on what YOU want. Take a Survey
              to have an impact on what graphics we print next in our next collection.
            </p>
            <Stack direction="horizontal" gap={5} style={{display: "flex", justifyContent: "center"}}>

              {/*survey button */}
              <Button
                onClick={() => handleModal(1)}
              >
                Survey <FontAwesomeIcon icon={faCompassDrafting} />
              </Button>
            </Stack>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-center">
          <Image src={image3} alt="image1" className="mx-auto" height="550px" />
        </div>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <div className="outline-text">
            <h1>Durable, high resolution prints.</h1>
            <p>
              Our prints are [blank] and [blank] to ensure that each can has a high-definition
              graphic and a waterproof finish.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
