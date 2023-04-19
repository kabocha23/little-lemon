import { Link } from "react-router-dom";
import LittleLemonLogo from "../../icons_assets/Logo.svg";
import "./Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <img src={LittleLemonLogo}></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/specials">Menu</Link>
          </li>
          <li>
            <Link to="/reserve-table">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
