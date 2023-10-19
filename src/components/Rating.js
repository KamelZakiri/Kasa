import "../styles/Rating.css";

function Rating({ score }) {
  // Je crée un tableau qui contiendra toute les étoiles et je crée 2 constantes pour les 2 couleurs
  const stars = [];
  const colorStar = (r) => (
    <div key={r} className="starsRed">
      <i className="fa-solid fa-star"></i>
    </div>
  );
  const greyStar = (r) => (
    <div key={r + rate} className="starsGrey">
      <i className="fa-solid fa-star"></i>
    </div>
  );
  //Je parse pour que les données soient prises en compte
  const rate = parseInt(score);
  let totalStar = 5 - rate;

  //J'ajoute les étoiles de couleurs en fonction du rate
  for (let s = 0; s < rate; s++) {
    stars.push(colorStar(s));
  }

  for (let gs = 0; gs < totalStar; gs++) {
    stars.push(greyStar(gs));
  }

  return <div className="starboxScore">{stars}</div>;
}
export default Rating;
