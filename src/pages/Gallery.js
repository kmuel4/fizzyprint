import React, { useEffect, useState } from "react";
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
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wordArt from "../Images/ShopGallery-WordArt.png";

const Gallery = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSort, setSelectedSort] = useState("az");
  const [filteredCards, setFilteredCards] = useState(props.cards);

  useEffect(() => {
    // apply the selected filter and sort whenever they change
    applyFilterAndSort(selectedFilter, selectedSort);
  }, [selectedFilter, selectedSort, props.cards]);

  const applyFilterAndSort = (filter, sort) => {
    let filtered = [];
    if (filter === "all") {
      filtered = props.cards;
    } else if (filter === "availability") {
      const highStockCards = props.cards.filter(
        (card) => card.stock === "high"
      );
      const lowStockCards = props.cards.filter((card) => card.stock === "low");
      filtered = [...lowStockCards, ...highStockCards];
    } else if (filter === "favorites") {
      filtered = props.cards.filter((card) => card.favorite === true);
    }
    else if (filter === "rating") {
      filtered = props.cards.filter((card) => card.rating > 3);
    }

    if (sort === "za") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "az") {
      filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredCards(filtered);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

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
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <p>{filteredCards.length} Items</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {/* sort */}
            <FloatingLabel
              label="Sort"
              value={selectedSort}
              onChange={handleSortChange}
            >
              <Form.Select>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </Form.Select>
            </FloatingLabel>
            &nbsp;
            {/* filter */}
            <FloatingLabel label="Filter">
              <Form.Select value={selectedFilter} onChange={handleFilterChange}>
                <option value="all">All</option>
                <option value="availability">Availability</option>
                <option value="favorites">Favorites</option>
                <option value="rating">Rating</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </div>

        <Row>
          {filteredCards.map((card) => (
            <Col key={card.id} xs={12} sm={8} md={6} lg={4} xl={3}>
              <GraphicCard
                key={card.id}
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
                rating={card.rating}
              />
            </Col>
          ))}
        </Row>
        {filteredCards.length === 0 && (
          <Container
            className="d-flex flex-column align-items-center justify-content-center mt-2 mb-5"
            style={{ padding: "5rem" }}
          >
            <h1>
              <FontAwesomeIcon
                icon={faTriangleExclamation}
                style={{ color: "#ffc107" }}
                size="xl"
              />
            </h1>
            <p style={{ fontSize: "1rem" }}>No graphics found.</p>
          </Container>
        )}
      </Container>
    </>
  );
};

export default Gallery;
