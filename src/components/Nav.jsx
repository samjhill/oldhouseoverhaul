import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">Old House Overhaul</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/progress" className="nav-link">Project Progress</Link>
          <Link to="/timeline" className="nav-link">Project Timeline</Link>
          <Link to="/renders" className="nav-link">Design Renders</Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
