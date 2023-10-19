import "../styles/Tag.css";

function Tag({ tags }) {
  return (
    <div className="tagContainer">
      <p className="tagName">{tags}</p>
    </div>
  );
}

export default Tag;
