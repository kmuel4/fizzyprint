import { Carousel, Button, Image, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import { useState } from "react";
import image1 from "../../Images/collage1.jpg";
import image2 from "../../Images/collage2.jpg";
import image3 from "../../Images/collage3.jpg";
import {
  faStore,
  faCompassDrafting,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const handleIndex = (value) => {
    setIndex(value);
    props.index(index);
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
            <h1>Create custom A.I. prints for any event.</h1>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
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
            <h1>Select from our gallery or create your own.</h1>
            <p>
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
            <Stack direction="horizontal" gap={5} style={{display: "flex", justifyContent: "center"}}>
              <Button
                variant="primary"
                onClick={() => handleIndex(1)}
              >
                Shop <FontAwesomeIcon icon={faStore} />
              </Button>
              <Button
                variant="primary"
                onClick={() => handleIndex(2)}
              >
                Create <FontAwesomeIcon icon={faCompassDrafting} />
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
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
              id elit non mi porta gravida at eget metus. Nullam id dolor id
              nibh ultricies vehicula ut id elit.
            </p>
            <p>
              <Button
                variant="primary"
                onClick={() => handleIndex(2)}
              >
                Learn more <FontAwesomeIcon icon={faCircleInfo} />
              </Button>
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
