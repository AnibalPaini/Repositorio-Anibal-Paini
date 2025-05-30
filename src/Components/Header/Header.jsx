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
          <a href="https://www.linkedin.com/in/anibal-paini-0226152b6/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
        </p>
        <p className="nav-link">
          <a href="https://github.com/AnibalPaini" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </p>
        <p className="nav-link">
          <a href="mailto:anibalpaini01@gmail.com" target="_blank">
            <i className="bi bi-envelope-fill"></i>
          </a>
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
