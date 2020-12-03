import Card from "react-bootstrap/Card";
import "./Pricing.css";
const PricingCard = (props) => {
  const { price, category } = props.pricingdata;
  return (
    <div className="col-md-4">
      <Card className="pricing-card text-center">
        <Card.Body>
          <Card.Title>{price}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <button className="btn btn-primary btn-radius">Order Now</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PricingCard;
