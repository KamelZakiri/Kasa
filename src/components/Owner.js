import "../styles/Owner.css";

function Owner({ host, image }) {
  return (
    <div className="hostContainer">
      <p className="hostName">{host}</p>
      <div className="hostPictureContainer">
        <img src={image} alt="Profil utilisateur" className="hostImage" />
      </div>
    </div>
  );
}

export default Owner;
