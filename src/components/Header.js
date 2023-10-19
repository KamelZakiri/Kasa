import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="logoSpace">
        <img src={logo} alt="Kasa" className="logoKasa" />
        <nav className="logoNav">
          <li className="space">
            <Link className="colortest" to="/">
              Accueil
              <div className="barreOrange"></div>
            </Link>
          </li>
          <li>
            <Link className="colortest" to="/about">
              A propos
              <div className="barreOrange"></div>
            </Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default Header;
