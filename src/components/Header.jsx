import React from "react";
import logoSpotify from "../assets/logo/logo-spotify.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logoSpotify} alt="Spotify Logo" />
      </Link>
    </div>
  );
};

export default Header;
