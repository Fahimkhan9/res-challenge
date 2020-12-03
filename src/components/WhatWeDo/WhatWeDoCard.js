import Card from "react-bootstrap/Card";
import "./WhatWeDo.css";
const WhatWeDoCard = (props) => {
  const { img, title, description } = props.whatwedodata;
  return (
    <div className="col-md-3">
      <Card className="whatwedocard text-center border-0 ">
        <Card.Body>
          <img src={img} alt="" />
          <Card.Title>{title}</Card.Title>

          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WhatWeDoCard;
