import imageBG from "../assets/Image BG.png";
import "../styles/Home.css";
import Card from "../components/Card";
import location from "../datas/logement.json";
import React from "react";

function Home() {
  document.title = "Kasa - Homepage";
  return (
    <div>
      <div className="bannerCenter">
        <div className="bannerContainer">
          <img src={imageBG} alt="Fond de forêt" className="imageBG" />
          <p className="bannerTitle">Chez vous, partout et ailleurs</p>
        </div>
      </div>
      <div className="cardsContainer">
        {location.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            id={logement.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
