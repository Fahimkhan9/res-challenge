import Card from "react-bootstrap/Card";
import "./Achievement.css";
const AchievementCard = (props) => {
  const { title, number } = props.achievemetndata;
  return (
    <div className="col-md-6">
      <Card className="border-0  my-2 achievementcard">
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{number}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AchievementCard;
