import "bootstrap/dist/css/bootstrap.min.css";
import CheckoutHeader from "./CheckoutHeader";
import {Card} from 'react-bootstrap';

const Preview = (props) => {
  return (
    <>
      <CheckoutHeader title="Preview"/>
      <Card>
        preview the graphics on the beverage
      </Card>
    </>
  );
};

export default Preview;
