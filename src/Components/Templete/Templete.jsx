import React from "react";
import Inicio from "../Inicio/Inicio.jsx";
import Estrellado from "../Estrellado/Estrellado.jsx";
import ProyectosContainer from "../ProyectosContainer/ProyectosContainer.jsx";

const Templete = () => {
  return (
    <main className="templete">
      <Estrellado />
      <Inicio />
      <ProyectosContainer />
    </main>
  );
};

export default Templete;
