import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";
import Marketing from "../components/Marketing";
import FeaturesLeft from "../components/Features/FeaturesLeft";
import FeaturesRight from "../components/Features/FeaturesRight";
import budlight from "../Images/budlight.png";
import vistaprint from "../Images/vistaprint.jpg";
import amazon from "../Images/amazon.jpg";

const Home = () => {
  return (
    <>
      {/*features */}
      <br></br>
      <FeaturesLeft
        heading="First featurette heading. It'll blow your mind."
        description="Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
      ligula porta felis euismod semper. Praesent commodo cursus magna,
      vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
      commodo."
      />
      <FeaturesRight
        heading="Oh yeah, it's that good. See for yourself."
        description="Donec ullamcorper nulla non metus auctor fringilla. 
  Vestibulum id ligula porta felis euismod semper. Praesent commodo 
  cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus 
  ac cursus commodo."
      />
      <FeaturesLeft
        heading="Mind = Blown, check this out."
        description="Donec ullamcorper nulla non metus auctor fringilla. 
  Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus 
  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus 
  commodo."
      />
      <FeaturesRight
        heading="And lastly, this one. Checkmate."
        description="Donec ullamcorper nulla non metus auctor fringilla. 
  Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus 
  magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus 
  commodo."
      />

      {/*marketing */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <h2 className="featurette-heading" style={{marginTop: "0rem"}}>Business Affiliates</h2>
      </div>
      <Container className="marketing">
        <Row>
          <Marketing
            company="Bud Light"
            caption="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Nullam id dolor id nibh ultricies veh icula ut id elit. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna."
            site="https://www.budlight.com/seltzers"
            image={budlight}
          />
          <Marketing
            company="VistaPrint"
            caption="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Nullam id dolor id nibh ultricies veh icula ut id elit. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna."
            site="https://www.vistaprint.com"
            image={vistaprint}
          />
          <Marketing
            company="Amazon"
            caption="Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
      Nullam id dolor id nibh ultricies veh icula ut id elit. Morbi leo
      risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
      cursus magna."
            site="https://www.amazon.com/"
            image={amazon}
          />
        </Row>
      </Container>

    </>
  );
};

export default Home;