import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../main.css";
import {
  faCartPlus,
  faCircleCheck,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import PreviewModal from "./PreviewModal";

const GraphicCard = (props) => {
  //handle showing preview modal
  const [show, setShow] = useState(false);
  const handlePreviewModal = () => {
    if (props.stock !== "out") {
      setShow(true);
    }
  };

  //add to cart
  const handleAdd = () => {
    props.add(props.id);
  };

  //remove from cart
  const handleRemove = () => {
    props.remove(props.id);
  };

  //cart button
  const [add, setAdd] = useState(false);
  const handleClick = () => {
    if (!add) {
      handleAdd();
    } else {
      handleRemove();
    }
    setAdd(!add);
  };

  //handle preview toggle
  const handlePreviewToggle = () => {
    setAdd(!add);
  };

  //update status of button status based on cart contents
  useState(() => {
    if (props.cart.includes(props.id)) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  }, [props.cart, props.id]);

  //hover for shadow
  const [isHovered, setIsHovered] = useState(false);

  //stock banner
  const getStockStyle = () => {
    let backgroundColor, paddingLeft, paddingRight, right;
    switch (props.stock) {
      case "high":
        backgroundColor = "#198754";
        paddingLeft = "30px";
        paddingRight = "30px";
        right = "-30px";
        break;
      case "low":
        backgroundColor = "#ffc107";
        paddingLeft = "50px";
        paddingRight = "50px";
        right = "-35px";
        break;
      case "out":
        backgroundColor = "#dc3545";
        paddingLeft = "30px";
        paddingRight = "30px";
        right = "-30px";
        break;
      default:
        backgroundColor = "";
        paddingLeft = "";
        paddingRight = "";
        right = "";
        break;
    }

    return {
      backgroundColor,
      fontWeight: "600",
      color: "white",
      paddingLeft,
      paddingRight,
      position: "absolute",
      top: "20px",
      right,
      transform: "rotate(45deg)",
      boxShadow: "0 0 10px rgba(255, 255, 255, 0.4)",
    };
  };

  //handle favorite button
  const [favorite, setFavorite] = useState("white");
  const [favoriteAnimate, setFavoriteAnimate] = useState(false);
  const handleFavorite = () => {
    //change color of star
    const newColor = favorite === "yellow" ? "white" : "yellow";
    setFavorite(newColor);

    //turn on and off animate
    setFavoriteAnimate(true);
    setTimeout(() => {
      setFavoriteAnimate(false);
    }, 1000);
  };

  //handle favorite change
  useEffect(()=>{
    if(favorite === "yellow"){
      props.handleFavorite(props.id, true);
    }
    else{
      props.handleFavorite(props.id, false);
    }
  }, [favorite])

  //handle checkout button
  const handleButtonColor = () => {
    if (props.stock !== "out") {
      if (!add) {
        return "primary";
      } else {
        return "success";
      }
    }
    else{
      return "danger"
    }
  };

  return (
    <>
      <Card
        className="graphic-card"
        style={{
          boxShadow: isHovered
            ? "0 0 10px rgba(0, 0, 0, 0.6)"
            : "0 0 5px rgba(0, 0, 0, 0.3)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="image-container">
          {/*graphic */}
          <Card.Img
            variant="top"
            src={props.image}
            className="radial-blur"
            style={{ cursor: "zoom-in" }}
            onClick={() => handlePreviewModal()}
          />
          <span style={getStockStyle()}>
            {props.stock === "high" && "Avaliable"}
            {props.stock === "low" && "Low"}
            {props.stock === "out" && "Sold Out"}
          </span>
          <span
            style={{
              position: "absolute",
              top: "8px",
              left: "10px",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              size="lg"
              style={{ color: favorite, cursor: "pointer" }}
              onClick={handleFavorite}
              bounce={favoriteAnimate}
            />
          </span>
        </div>
        <Card.Body>
          {/*title */}
          <Card.Title>{props.title}</Card.Title>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/*price */}
            <Card.Text>${props.price.toString()}</Card.Text>
            {/*button icon */}
            <Button
              disabled={props.stock === "out"}
              onClick={handleClick}
              variant={handleButtonColor()}
            >
              {!add ? (
                <FontAwesomeIcon icon={faCartPlus} />
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircleCheck} />
                </>
              )}
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/*preview modal */}
      <PreviewModal
        show={show}
        setShow={setShow}
        image={props.image}
        title={props.title}
        price={props.price}
        previewToggle={handlePreviewToggle}
      />
    </>
  );
};

export default GraphicCard;
