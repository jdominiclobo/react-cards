import React from "react";
import "./Card.css";

const Card = (props) => {
  const { user } = props;
  return (
    <div className="card">
      <h1>{user.name}</h1>
    </div>
  );
};

export default Card;
