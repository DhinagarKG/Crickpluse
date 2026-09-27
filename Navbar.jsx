import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span>CrickPluse</span>
      </div>

      <div className="nav-links">

        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        <NavLink to="/teams" className="nav-link">
          Teams
        </NavLink>

        <NavLink to="/live-score" className="nav-link">
          Live Score
        </NavLink>

        <NavLink to="/players" className="nav-link">
          Players
        </NavLink>

        <NavLink to="/matches" className="nav-link">
          Matches
        </NavLink>

        <NavLink to="/tournament" className="nav-link">
          Tournament
        </NavLink>

        <NavLink to="/profile" className="nav-link">
          Profile
        </NavLink>

        <NavLink to="/admin" className="nav-link">
          Admin
        </NavLink>

        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;