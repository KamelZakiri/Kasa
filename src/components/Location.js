import "../styles/Location.css";

function Location({ title, location }) {
  return (
    <div className="locationContainer">
      <h1 className="locationTitle">{title}</h1>
      <p className="locationPosition">{location}</p>
    </div>
  );
}

export default Location;
