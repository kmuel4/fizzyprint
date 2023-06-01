import React, { useEffect, useState } from "react";
import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  FloatingLabel,
  OverlayTrigger,
  Popover,
  Button,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faTriangleExclamation,
  faSliders,
  faArrowDownAZ,
  faArrowUpAZ,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import wordArt from "../Images/ShopGallery-WordArt.png";

const Gallery = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSortOption, setSelectedSortOption] = useState("az");
  const [filteredCards, setFilteredCards] = useState(props.cards);

  useEffect(() => {
    applyFilterAndSort(selectedFilter);
  }, [selectedFilter, selectedSortOption, props.cards]);

  const applyFilterAndSort = (filter) => {
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
    } else if (filter === "rating") {
      filtered = props.cards.filter((card) => card.rating > 3);
    }

    const sorted = [...filtered]; // Create a copy of the filtered array
    if (selectedSortOption === "az") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedSortOption === "za") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredCards(sorted);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const SortAndFilterPopover = (
    <Popover>
      <Popover.Header as="h3">Sort and Filter</Popover.Header>
      <Popover.Body>
        {/* sort */}
        <Form.Group>
          <Form.Check
            type="radio"
            id="sort-az"
            label={
              <Stack direction="horizontal" gap={2}>
                <FontAwesomeIcon icon={faArrowDownAZ} size="lg" />
              </Stack>
            }
            name="sortOption"
            value="az"
            checked={selectedSortOption === "az"}
            onChange={(event) => setSelectedSortOption(event.target.value)}
          />
          <Form.Check
            type="radio"
            id="sort-za"
            label={
              <Stack direction="horizontal" gap={2}>
                <FontAwesomeIcon icon={faArrowUpAZ} size="lg" />
              </Stack>
            }
            name="sortOption"
            value="za"
            checked={selectedSortOption === "za"}
            onChange={(event) => setSelectedSortOption(event.target.value)}
          />
        </Form.Group>

        <hr />

        {/* filter */}
        <FloatingLabel label="Filter">
          <Form.Select value={selectedFilter} onChange={handleFilterChange}>
            <option value="all">All</option>
            <option value="availability">Availability</option>
            <option value="favorites">Favorites</option>
            <option value="rating">Rating</option>
          </Form.Select>
        </FloatingLabel>
      </Popover.Body>
    </Popover>
  );

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

          <OverlayTrigger
            trigger="click"
            placement="top"
            overlay={SortAndFilterPopover}
          >
            <Button>
              <strong>Sort and Filter &nbsp;</strong>
              <FontAwesomeIcon icon={faSliders} />
            </Button>
          </OverlayTrigger>
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
