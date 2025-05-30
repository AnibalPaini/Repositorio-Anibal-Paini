import React from "react";

const Inicio = () => {
  return (
    <section className="section-inicio">
      <div className="inicio">
        <div>
          <h1>Anibal Eduardo Paini</h1>
          <p>Full Stack Developer</p>
        </div>
        <div>
          <img
            src="/img/img.jpeg"
            alt="Foto de Aníbal Paini"
            className="profile-img"
          />
        </div>
      </div>
      <div className="scroll">
        <i className="bi bi-caret-down"></i>
      </div>
    </section>
  );
};

export default Inicio;
