import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav style={{ padding: "1rem" }}>
      <Link to="/">Home</Link> | <Link to="/progress">Progress</Link>
    </nav>
  );
}

export default Nav;
