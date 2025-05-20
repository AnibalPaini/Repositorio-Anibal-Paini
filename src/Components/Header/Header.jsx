import React, { useState } from "react";

const Header = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);

  const handdleToggleMenu = () => {
    setMostrarMenu(!mostrarMenu);
  };

  return (
    <aside
      className={`aside ${mostrarMenu ? "aside--abierto" : "aside--cerrado"}`}
    >
      <p className="logo-aside">A.P</p>
      <nav className="nav">
        <p className="nav-link">
          <i class="bi bi-linkedin"></i>
        </p>
        <p className="nav-link">
          <i class="bi bi-github"></i>
        </p>
        <p className="nav-link">
          <i class="bi bi-envelope-fill"></i>
        </p>
      </nav>
      <div className="menu" onClick={handdleToggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </aside>
  );
};

export default Header;
