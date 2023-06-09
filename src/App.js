import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import MainCarousel from "./components/Carousel/MainCarousel";
import { useState, useEffect } from "react";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Checkout from "./components/Checkout/Checkout";
import Survey from "./pages/Survey";
import SignUp from "./pages/SignUp";

//graphics
import image1 from "./Images/image1.png";
import image2 from "./Images/image2.png";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
import image6 from "./Images/image6.png";
import image7 from "./Images/image7.png";
import image8 from "./Images/image8.png";
import image9 from "./Images/image9.png";
import ToastMessage from "./components/ToastMessage";
import Menu from "./pages/Menu";
import CheckoutPreview from "./pages/CheckoutPreview";
import LogIn from "./pages/LogIn";

const App = () => {
  //graphics database
  const [cards, setCards] = useState([
    {
      image: image1,
      title: "Space Kitty Baller",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 1,
      stock: "high",
      favorite: false,
      rating: "3",
    },
    {
      image: image2,
      title: "Large Purple Fish",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 2,
      stock: "high",
      favorite: false,
      rating: "3",
    },
    {
      image: image3,
      title: "Royal Capybara",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 3,
      stock: "out",
      favorite: false,
      rating: "5",
    },
    {
      image: image4,
      title: "Alien Surfer",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 4,
      stock: "high",
      favorite: false,
      rating: "3",
    },
    {
      image: image5,
      title: "Abstract Space Dinner",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 5,
      stock: "high",
      favorite: false,
      rating: "3",
    },
    {
      image: image6,
      title: "Nebula Symphony",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 6,
      stock: "low",
      favorite: false,
      rating: "5",
    },
    {
      image: image7,
      title: "Fat Space Man",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 7,
      stock: "out",
      favorite: false,
      rating: "5",
    },
    {
      image: image8,
      title: "Panda Alechemy",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 8,
      stock: "high",
      favorite: false,
      rating: "3",
    },
    {
      image: image9,
      title: "Cosmo Soup",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      price: 4.99,
      id: 9,
      stock: "high",
      favorite: false,
      rating: "3",
    },
  ]);

  //cart
  const [cartItems, setCartItems] = useState([]);

  //add to cart
  const handleAdd = (value) => {
    setCartItems([...cartItems, value]);
  };

  //remove from cart
  const handleRemove = (value) => {
    const updatedCartItems = cartItems.filter((item) => item !== value);
    setCartItems(updatedCartItems);
  };

  const setFavorite = (id, status) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, favorite: status };
      }
      return card;
    });
    setCards(updatedCards);
  };

  //get number of items in cart
  const [cartItemsLength, setCartItemsLength] = useState();
  useEffect(() => {
    setCartItemsLength(cartItems.length);
  }, [cartItems]);

  //handle survey submit
  const [surveySubmit, setSurveySubmit] = useState(false);

  //handle email submit
  const [emailSubmit, setEmailSubmit] = useState(false);

  //handle screen idnex
  const [index, setIndex] = useState(0);
  const showScreen = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return (
          <Gallery
            cards={cards}
            add={handleAdd}
            remove={handleRemove}
            cart={cartItems}
            handleFavorite={setFavorite}
          />
        );
      case 2:
        return <About />;
      default:
        return <Home />;
    }
  };

  // handle modals
  const [modalIndex, setModalIndex] = useState();
  const modals = (value) => {
    switch (value) {
      case 0:
        return (
          <Checkout
            checkoutIndex={setModalIndex}
            cart={cartItems}
            cards={cards}
            remove={handleRemove}
            index={setIndex}
          />
        );
      case 1:
        return (
          <Survey checkoutIndex={setModalIndex} submit={setSurveySubmit} />
        );
      case 2:
        return <SignUp checkoutIndex={setModalIndex} submit={setEmailSubmit} />;
      case 3:
        return <Menu checkoutIndex={setModalIndex} setNav={setIndex} />;
      case 4:
        return (
          <CheckoutPreview
            checkoutIndex={setModalIndex}
            cartItemsLength={cartItemsLength}
            cart={cartItems}
            cards={cards}
            remove={handleRemove}
          />
        );
        case 5:
          return <LogIn modalIndex={setModalIndex}/>

      default:
        return;
    }
  };

  return (
    <>
      {/*nav bar */}
      <CustomNavbar
        index={setIndex}
        currentIndex={index}
        checkoutIndex={setModalIndex}
        handleModal={setModalIndex}
        menu={setModalIndex}
        cartItemsLength={cartItemsLength}
      />

      {/*carousel */}
      <MainCarousel index={setIndex} handleModal={setModalIndex} />

      {/*show screens */}
      {showScreen(index)}

      {/*show checkout screens */}
      {modals(modalIndex)}

      {/*footer */}
      <Footer />

      {/*survey message */}
      <ToastMessage
        show={surveySubmit}
        setShow={setSurveySubmit}
        message="Survey recieved!"
      />

      {/*email message */}
      <ToastMessage
        show={emailSubmit}
        setShow={setEmailSubmit}
        message="Successfully subscribed!"
      />
    </>
  );
};

export default App;
