import { useState } from "react";
import "../styles/Slide.css";

function Slide({ picture }) {
  //On utilise  useState pour stocker les images et les manipuler pour les afficher dans le carrousel
  const [imgTab] = useState(picture);
  const [imgIndex, setImgIndex] = useState(0);

  //On crée une fonction pour augmenter l'indice du tableau et passer au images suivantes
  //Quand on atteint la dernière page le tableau revient a 0
  function carrouselRight() {
    if (imgIndex < imgTab.length - 1) {
      setImgIndex(imgIndex + 1);
    } else {
      setImgIndex(0);
    }
  }
  //On crée la fonction pour réduire l'indice du tableau et passer a l'image précédente
  //et quand on est au 1er indice (0), on passe au dernier
  function carrouselLeft() {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    } else {
      setImgIndex(imgTab.length - 1);
    }
  }

  //On utilise un ternaire pour afficher ou non le compteur et les chevrons en fonction du nombre d'image
  //s'il n'y a qu'une seule image : les chevrons et le compteur ne s'affiche pas
  return (
    <>
      <div className="carrouselContainer">
        {imgTab.length <= 1 ? (
          <div></div>
        ) : (
          <button className="carrouselLeft" onClick={(e) => carrouselLeft()}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <div className="carrouselCenter">
          <img
            src={imgTab[imgIndex]}
            alt="intérieur de la location"
            className="carrouselImage"
          />
          {imgTab.length <= 1 ? (
            <div></div>
          ) : (
            <p className="carrouselCounter">
              {imgIndex + 1}/{imgTab.length}
            </p>
          )}
        </div>
        {imgTab.length <= 1 ? (
          <div></div>
        ) : (
          <button className="carrouselRight" onClick={(e) => carrouselRight()}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </div>
    </>
  );
}

export default Slide;
