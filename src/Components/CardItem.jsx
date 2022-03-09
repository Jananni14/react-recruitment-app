import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { BsThreeDotsVertical as DropDotIcon } from "react-icons/bs";
import { AiOutlineClockCircle as ClockIcon } from "react-icons/ai";
import "./styles.scss";
function CardItem(props) {
  const { name = "title", company, col = {} } = props;
  return (
    <Card className="text-start shadow-sm card-container">
      <Card.Body>
        <Card.Title className="card-name">{name}</Card.Title>
        <Card.Text className="card-subtitle">
          {company}
          <div className="card-id">REQ:#1029</div>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted card-footer">
        <ReactStars
          size={10}
          half={false}
          ratingBackgroundColor="#c8c7c8"
          onChange={(newRating) => {
            console.log(newRating);
          }}
        />
        <div className="middle-footer">
          {col.name === "Contacted" && (
            <div className="login-logo card-logo">
              <div className="inner-circle">S</div>
            </div>
          )}
          {col.name !== "Open" && (
            <div className="clock">
              <ClockIcon size={15} />
              <span className="date">14d</span>
            </div>
          )}
        </div>
        <DropDotIcon size={15} />
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
