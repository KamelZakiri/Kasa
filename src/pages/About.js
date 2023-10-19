import Dropdown from "../components/Dropdown";
import Quality from "../datas/about.json";
import Apropos from "../assets/aboutpicture.jpeg";
import "../styles/About.css";

function About() {
  return (
    <>
      <div className="bannerAboutContainer">
        <img className="bannerAbout" src={Apropos} alt="paysage de montagne" />
      </div>
      <div className="aboutDrop">
        {Quality.map((element) => (
          <Dropdown
            className="dropLarge"
            key={element.id}
            item={element.name}
            description={element.description}
          />
        ))}
      </div>
    </>
  );
}

export default About;
