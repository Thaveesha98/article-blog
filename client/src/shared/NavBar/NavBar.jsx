import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <Link
        to="/"
        className={`item ${location.pathname === "/" ? "active" : ""}`}>
        Home Page
      </Link>
      <Link
        to="/createpost"
        className={`item ${
          location.pathname === "/createpost" ? "active" : ""
        }`}>
        Create Post
      </Link>
    </div>
  );
};

export default NavBar;
