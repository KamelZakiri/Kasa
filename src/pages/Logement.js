import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../datas/logement.json";
import "../styles/Logement.css";
import Slide from "../components/Slide";
import Location from "../components/Location";
import Owner from "../components/Owner";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Error from "../pages/Error";

import Dropdown from "../components/Dropdown";

function Logement() {
  const [logement, setLogement] = useState(null);
  const [chargement, setChargement] = useState(true);
  const [error, setError] = useState(false);
  let params = useParams();

  useEffect(() => {
    // On récupe les données liés a la page et on les distingues avec l'ID
    //dans useParams
    let monLogement = data.filter((logement) => logement.id === params.id)[0];
    if (typeof monLogement === "object") {
      setLogement(monLogement);
      setChargement(false);
    }
    if (monLogement === undefined) {
      setChargement(false);
      setError(true);
    }
  }, []);

  // On affiche le contenu de la page après chargement (quand il y en a un)
  // Si le chemin de la page n'est pas bon retourne error 404
  if (chargement) {
    return <div>Chargement en cours ...</div>;
  } else {
    if (error) {
      return <Error />;
    } else {
      return (
        <div key={logement.id}>
          <Slide picture={logement.pictures} />
          <div className="jeuneDisplay">
            <div className="life">
              <Location title={logement.title} location={logement.location} />
              <div className="tagsContainer">
                {logement.tags.map((tag) => (
                  <Tag key={tag} tags={tag} />
                ))}
              </div>
            </div>

            <div className="blockHostStars">
              <Owner host={logement.host.name} image={logement.host.picture} />
              <div className="starsContainer">
                <Rating score={logement.rating} />
              </div>
            </div>
          </div>
          <div className="dropdownInfoContainer">
            <div className="dropdownInfo1">
              <Dropdown item="Description" description={logement.description} />
            </div>
            <div className="dropdownInfo2">
              <Dropdown item="Equipement" description={logement.equipments} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Logement;
