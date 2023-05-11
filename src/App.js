import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import MainCarousel from "./components/Carousel/MainCarousel";
import { useState, useEffect } from "react";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import ContinueArrow from "./components/ContinueArrow";
import Checkout from "./components/Checkout/Checkout";
import Beverage from "./components/Checkout/Beverage";
import Review from "./components/Checkout/Review";
import PayPal from "./components/Checkout/PayPal";
import Shipping from "./components/Checkout/Shipping";
import Receipt from "./components/Checkout/Receipt";

const App = () => {
  //handle screen idnex
  const [index, setIndex] = useState(0);
  const showScreen = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Gallery />;
      case 2:
        return <Gallery />;
      case 3:
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
        return <Checkout checkoutIndex={setCheckoutIndex} />;
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
      default:
        return;
    }
  };
  //show scroll arrow
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY !== 0;
      setShowArrow(!top);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/*nav bar */}
      <CustomNavbar
        index={setIndex}
        currentIndex={index}
        checkoutIndex={setCheckoutIndex}
      />

      {/*carousel */}
      <MainCarousel index={setIndex} />

      {/*continue scrolling arrow */}
      <ContinueArrow show={showArrow} />

      <hr
        className="featurette-divider"
        style={{ marginBottom: "2rem", marginTop: "0rem" }}
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
