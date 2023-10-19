import logofooter from "../assets/logofooter.jpg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="posrelative">
        <img
          className="footerLogo"
          src={logofooter}
          alt="Logo Kasa sur fond noir"
        />
        <p className="footerText">
          <i class="fa-regular fa-copyright"></i> "2023 Kasa. All Right
          Reserved"
        </p>
      </div>
    </footer>
  );
}

export default Footer;
