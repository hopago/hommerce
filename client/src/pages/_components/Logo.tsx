import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { cn } from "../../lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link className={cn("home-nav__logo link", className && className)} to="/">
      <img src={logo} alt="logo" />
      <h1>Hommerce</h1>
    </Link>
  );
}
