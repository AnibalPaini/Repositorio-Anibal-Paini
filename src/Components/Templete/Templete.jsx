import React from "react";
import Inicio from "../Inicio/Inicio.jsx";
import Estrellado from "../Estrellado/Estrellado.jsx";
import Proyectos from "../Proyectos/Proyectos.jsx";

const Templete = () => {
  return (
    <main className="templete">
      <Estrellado />
      <Inicio />
      <Proyectos />
    </main>
  );
};

export default Templete;
