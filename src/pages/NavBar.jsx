import { NavLink } from "react-router-dom";
import "../css/LeftNav.css";
import logo from "../assets/EmergysLogo.png";

export default function NavBar() {
  return (
    <div className="leftnav">
      <img src={logo} className="navlogo" />
      <ul>
        <li>
          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="nav-link">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
