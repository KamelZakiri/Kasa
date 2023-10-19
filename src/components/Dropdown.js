import { useState } from "react";

import "../styles/Dropdown.css";

function Dropdown({ description, item }) {
  const [open, setOpen] = useState(false);

  const descriptionActive = () => {
    if (typeof description === "object") {
      return (
        <ul>
          {description.map((item) => (
            <li className="equipmentsUl" key={item}>
              {item}
            </li>
          ))}
        </ul>
      );
    } else {
      return description;
    }
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="barreDeroulante">
      <div className="descriptionContainer">
        <p className="infoName">{item}</p>
        <button
          className={open ? "curseurNone" : "curseur1"}
          onClick={handleOpen}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <button
          className={open ? "curseur" : "curseurNone"}
          onClick={handleOpen}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {open ? (
        <div className="slideDescription">{descriptionActive()}</div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Dropdown;
