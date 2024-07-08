import React from "react";
import logo from "../assets/logo.png";
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="The logo" className="logo" />
      <h1>Real Estate Management</h1>
    </header>
  );
}

export default Header;
