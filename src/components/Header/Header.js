import LittleLemonLogo from "../../icons_assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <img src={LittleLemonLogo}></img>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Reservations</a>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
