import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import MainCarousel from "./components/Carousel/MainCarousel";
import { useState, useEffect } from "react";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Checkout from "./components/Checkout/Checkout";
import Beverage from "./components/Checkout/Beverage";
import Review from "./components/Checkout/Review";
import PayPal from "./components/Checkout/PayPal";
import Shipping from "./components/Checkout/Shipping";
import Receipt from "./components/Checkout/Receipt";
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

//hardcode database for graphics
const cards = [
  {
    image: image1,
    title: "Space Kitty Baller",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 1,
  },
  {
    image: image2,
    title: "Large Purple Fish",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 2,
  },
  {
    image: image3,
    title: "Royal Capybara",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 3,
  },
  {
    image: image4,
    title: "Alien Surfer",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 4,
  },
  {
    image: image5,
    title: "Abstract Space Dinner",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 5,
  },
  {
    image: image6,
    title: "Nebula Symphony",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 6,
  },
  {
    image: image7,
    title: "Fat Space Man",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 7,
  },
  {
    image: image8,
    title: "Panda Alechemy",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 8,
  },
  {
    image: image9,
    title: "Cosmo Soup",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    price: 4.99,
    id: 9,
  },
];

const App = () => {
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

  //get number of items in cart
  const [cartItemsLength, setCartItemsLength] = useState();
  useEffect(()=> {
    setCartItemsLength(cartItems.length);
  }, [cartItems])

  //handle screen idnex
  const [index, setIndex] = useState(0);
  const showScreen = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Gallery cards={cards} add={handleAdd} remove={handleRemove} cart={cartItems}/>;
      case 2:
        return <About />;
      default:
        return <Home />;
    }
  };

  // handle checkout windows
  const [checkoutIndex, setCheckoutIndex] = useState();
  const checkoutScreen = (value) => {
    switch (value) {
      case 0:
        return (
          <Checkout
            checkoutIndex={setCheckoutIndex}
            cart={cartItems}
            cards={cards}
            remove={handleRemove}
            index={setIndex}
          />
        );
      case 1:
        return <Beverage checkoutIndex={setCheckoutIndex} />;
      case 2:
        return <Review checkoutIndex={setCheckoutIndex} />;
      case 3:
        return <Shipping checkoutIndex={setCheckoutIndex} />;
      case 4:
        return <PayPal checkoutIndex={setCheckoutIndex} />;
      case 5:
        return <Receipt checkoutIndex={setCheckoutIndex} />;
      case 6:
        return <Survey checkoutIndex={setCheckoutIndex} />;
      case 7:
        return <SignUp checkoutIndex={setCheckoutIndex} />;
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
        checkoutIndex={setCheckoutIndex}
        handleModal={setCheckoutIndex}
        cartItemsLength={cartItemsLength}
      />

      {/*carousel */}
      <MainCarousel index={setIndex} handleModal={setCheckoutIndex} />

      <hr
        className="featurette-divider"
        style={{ marginBottom: "2rem", marginTop: "1rem" }}
      />

      {/*show screens */}
      {showScreen(index)}

      {/*show checkout screens */}
      {checkoutScreen(checkoutIndex)}

      {/*footer */}
      <Footer />
    </>
  );
};

export default App;
