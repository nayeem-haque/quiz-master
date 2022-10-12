import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/quiz.webp";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div className="il">
        <img src={logo} alt="" />
        <Link className="link" to="/">
          Quiz Master
        </Link>
      </div>
      <div>
        <Link className="link" to="/">
          Topic
        </Link>
        <Link className="link" to="/statistic">
          Statistics
        </Link>
        <Link className="link" to="/blog">
          Blog
        </Link>
      </div>
    </nav>

  );

};

export default Header;
