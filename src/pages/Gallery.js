import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import wordArt from "../Images/ShopGallery-WordArt.png";

const Gallery = (props) => {
  // scroll to top of page on load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const handleAdd = (value) => {
    props.add(value);
  };

  const handleRemove = (value) => {
    props.remove(value);
  };

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
        <Image src={wordArt} fluid/>
      </Container>
      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <Row>
          {props.cards.map((card, index) => (
            <Col key={index} xs={12} sm={8} md={6} lg={4} xl={3}>
              <GraphicCard
                key={index}
                image={card.image}
                title={card.title}
                desc={card.desc}
                price={card.price}
                id={card.id}
                add={handleAdd}
                remove={handleRemove}
                cart={props.cart}
                stock={card.stock}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Gallery;
