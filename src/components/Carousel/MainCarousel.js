import { Carousel, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import {useState} from 'react';

const MainCarousel = (props) => {
  const [index, setIndex] = useState(0);
  const handleIndex = (value) => {
    setIndex(value);
    props.index(value);
  };

  return (
    <Carousel style={{ backgroundColor: "grey", marginTop: "1.5rem" }}>
      <Carousel.Item>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <h1>Create custom A.I. prints for any event.</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <h1>Select from our gallery or create your own.</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            <Button variant="primary" size="lg" onClick={() => handleIndex(1)}>
              Browse gallery
            </Button>&nbsp;&nbsp;
            <Button variant="primary" size="lg" onClick={() => handleIndex(2)}>
              Generate
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "75%",
          }}
        >
          <h1>Durable, high resolution prints.</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            <Button variant="primary" size="lg" onClick={() => handleIndex(3)}>
              Learn more
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
