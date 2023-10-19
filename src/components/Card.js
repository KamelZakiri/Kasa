import "../styles/Card.css";
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, cover, title }) {
  return (
    <div className="cardContainer">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt="" className="cardImg" />
        <h3 className="cardTitle">{title}</h3>
      </Link>
    </div>
  );
}

export default Card;
