import logo from "../../helpers/logo.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="horoscope" />
      </div>
      <div className="links">
        <a href="#horoscope">TAKIMLAR </a>
        <a href="#daily">PİLOTLAR </a>
        <a href="#tarot">SIRALAMA </a>
    
      </div>
    </div>
  );
};
export default Navbar;
