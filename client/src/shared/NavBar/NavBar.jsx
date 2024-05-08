import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="nav-bar">
      <div className="main">
        <Link
          to="/"
          className={`item ${location.pathname === "/" ? "active" : ""}`}>
          Home Page
        </Link>
        <Link
          to="/createPost"
          className={`item ${
            location.pathname === "/createPost" ? "active" : ""
          }`}>
          Create Post
        </Link>
      </div>

      <div className="auth">
        <Link
          to="/login"
          className={`item ${location.pathname === "/login" ? "active" : ""}`}>
          Login
        </Link>
        <Link
          to="/registration"
          className={`item ${
            location.pathname === "/registration" ? "active" : ""
          }`}>
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
