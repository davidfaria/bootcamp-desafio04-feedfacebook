import React from "react";

import "./styles.css";
import logo from "../../assets/logo1.png";
import profile from "../../assets/profile.png";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="profile">
        <p>Meu Perfil</p>
        <img src={profile} />
      </div>
    </header>
  );
}

export default Header;
