import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tripco.</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/destinations">Destinations</NavLink>
        <NavLink to="/profile/101">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;