import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import MainCarousel from "./components/Carousel/MainCarousel";
import { useState, useEffect } from "react";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import ContinueArrow from "./components/ContinueArrow";

const App = () => {
  //handle screen idnex
  const [index, setIndex] = useState(0);
  const showScreen = (value) => {
    switch (value) {
      case 0:
        return <Home />;
      case 1:
        return <Gallery />;
      //need generate page
      case 3:
        return <About />;
      default:
        return <Home />;
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
      <CustomNavbar index={setIndex} currentIndex={index} />

      {/*carousel */}
      <MainCarousel index={setIndex} />

      {/*continue scrolling arrow */}
      <ContinueArrow show={showArrow} />

      <hr className="featurette-divider" style={{marginBottom: "2rem"}}/>

      {/*show screens */}
      {showScreen(index)}

      {/*footer */}
      <Footer />
    </>
  );
};

export default App;
