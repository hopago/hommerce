import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <Link className="home-nav__logo link" to="/">
      <img src={logo} alt="logo" />
      <h1>Hommerce</h1>
    </Link>
  );
}
