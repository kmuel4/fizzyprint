import React, { useEffect, useState } from "react";
import GraphicCard from "../components/GraphicCard/GraphicCard.js";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  OverlayTrigger,
  Popover,
  Button,
  Stack,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faTriangleExclamation,
  faSliders,
  faArrowDownAZ,
  faArrowUpAZ,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = (props) => {
  //initialize filter and sort
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedSortOption, setSelectedSortOption] = useState("az");
  const [filteredCards, setFilteredCards] = useState(props.cards);

  //apply the filter to the cards
  useEffect(() => {
    applyFilterAndSort(selectedFilter);
  }, [selectedFilter, selectedSortOption, applyFilterAndSort]);

  //handle filter and sort
  const applyFilterAndSort = (filter) => {
    let filtered = [];
    //show all
    if (filter === "all") {
      filtered = props.cards;
    }
    //show avaliability
    else if (filter === "availability") {
      //high avaliability
      const highStockCards = props.cards.filter(
        (card) => card.stock === "high"
      );
      //low avaliability
      const lowStockCards = props.cards.filter((card) => card.stock === "low");
      //combine
      filtered = [...lowStockCards, ...highStockCards];
    }
    //show favorites
    else if (filter === "favorites") {
      filtered = props.cards.filter((card) => card.favorite === true);
    }
    //show popular
    else if (filter === "rating") {
      filtered = props.cards.filter((card) => card.rating > 3);
    }

    //sort
    const sorted = [...filtered];
    //a to z
    if (selectedSortOption === "az") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }
    //z to a
    else if (selectedSortOption === "za") {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredCards(sorted);
  };

  //handle filter
  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  //sort and filter settings
  const SortAndFilterPopover = (
    <Popover>
      <Popover.Body>
        {/* sort */}
        <Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/*a to z */}
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
            {/*z to a */}
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
          </div>
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

  //top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  //add graphic to cart
  const handleAdd = (value) => {
    props.add(value);
  };

  //remove from cart
  const handleRemove = (value) => {
    props.remove(value);
  };

  //add graphic as favorite
  const handleFavorite = (id, status) => {
    props.handleFavorite(id, status);
  };

  return (
    <>
      {/*title */}
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "1rem",
          borderRadius: "0px",
          marginBottom: "2rem",
          boxShadow: "1px 0px 3px rgba(5, 5, 5, 0.5)"
          
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold" }}>Shop Gallery</h1>
      </Card>

      <Container className="mx-auto" style={{ maxWidth: "1200px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {/*number of items shown */}
          <p>{filteredCards.length} Items</p>

          {/*sort and filter   */}
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

        {/*graphics */}
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

        {/*conditional if no graphics */}
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
