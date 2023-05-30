import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import {Container} from 'react-bootstrap';

const Preview = (props) => {
  props.complete(true);
  return (
    <>
      <CheckoutHeader title="Preview"/>
      <Container style={{maxWidth: "1200px"}}>
        preview the graphics on the beverage. print each graphic on their selected can with the brand overlay on it
      </Container>
    </>
  );
};

export default Preview;
