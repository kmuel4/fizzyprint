import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import wordArt from "../Images/ShopGallery-WordArt.png";
import {
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredCards, setFilteredCards] = useState(props.cards);

  useEffect(() => {
    // apply the selected filter whenever it changes
    applyFilter(selectedFilter);
  }, [selectedFilter, props.cards]);

  const applyFilter = (filter) => {
    let filtered = [];
    if (filter === "all") {
      filtered = props.cards;
    } else if (filter === "availability") {
      filtered = props.cards.filter((card) => card.stock !== "out");
    } else if (filter === "favorites") {
      filtered = props.cards.filter((card) => card.favorite === true);
    }
    setFilteredCards(filtered);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

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

  const handleFavorite = (id, status) => {
    props.handleFavorite(id, status);
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
        <Image src={wordArt} fluid />
      </Container>
      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <p>{filteredCards.length} Items</p>
          <FloatingLabel controlId="floatingSelect" label="Sort and Filter">
            <Form.Select
              aria-label="Floating label select example"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="avaliability">Avaliability</option>
              <option value="favorites">Favorites</option>
            </Form.Select>
          </FloatingLabel>
        </div>

        <Row>
          {filteredCards.map((card, index) => (
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
                favorite={card.favorite}
                handleFavorite={handleFavorite}
              />
            </Col>
          ))}
        </Row>
        {filteredCards.length === 0 && (
          <Container
            className="d-flex flex-column align-items-center justify-content-center mt-2 mb-5"
          >
            <h1>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#ffc107" }}
                size="xl"
              />
            </h1>
            <p style={{ fontSize: "1rem" }}>
              No graphics found.
            </p>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Gallery;
