import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomNavbar from "./components/CustomNavbar";
import MainCarousel from "./components/Carousel/MainCarousel";
import {useState} from 'react';
import Gallery from "./pages/Gallery";
import About from "./pages/About";

const App = () => {
  const [index, setIndex] = useState(0);

  const showScreen = (value) => {
    switch(value){
      case 0: 
        return <Home/>
      case 1:
          return <Gallery/>
          //need generate page
      case 3:
          return <About/>
      default:
          return <Home/>
        
    }
  }

  return (
    <>
      {/*nav bar */}
      <CustomNavbar index={setIndex} currentIndex={index}/>

      {/*carousel */}
      <MainCarousel index={setIndex}/>

      {showScreen(index)}

      {/*footer */}
      <Footer />
    </>
  );
};

export default App;
