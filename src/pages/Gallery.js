import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";
import image6 from "../Images/image6.png";
import image7 from "../Images/image7.png";
import image8 from "../Images/image8.png";
import image9 from "../Images/image9.png";

//temp database of graphics
const cards = [
  { image: image1, title: "Space Kitty Baller", price: 4.99, id: 1 },
  { image: image2, title: "Large Purple Fish", price: 4.99, id: 2 },
  { image: image3, title: "Royal Capybara", price: 4.99, id: 3 },
  { image: image4, title: "Alien Surfer", price: 4.99, id: 4 },
  { image: image5, title: "Abstract Space Dinner", price: 4.99, id: 5 },
  { image: image6, title: "Nebula Symphony", price: 4.99, id: 6 },
  { image: image7, title: "Fat Space Man", price: 4.99, id: 7 },
  { image: image8, title: "Panda Alechemy", price: 4.99, id: 8 },
  { image: image9, title: "Cosmo Soup", price: 4.99, id: 9 },
];

const Gallery = () => {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "3rem",
          marginTop: "0rem",
        }}
      >
        <h2 className="featurette-heading" style={{ marginTop: "1.1rem" }}>
          Shop Gallery
        </h2>
      </Container>
      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <Row>
          {cards.map((card, index) => (
            <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
              <GraphicCard
                image={card.image}
                title={card.title}
                price={card.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
