import React from "react";
import Inicio from "../Inicio/Inicio.jsx";
import Estrellado from "../Estrellado/Estrellado.jsx";
import ProyectosContainer from "../ProyectosContainer/ProyectosContainer.jsx";
import SobreMi from "../SobreMi/SobreMi.jsx";
import Certificados from "../Certificados/Certificados.jsx";
import Form from "../Form/Form.jsx";

const Templete = () => {
  return (
    <main className="templete">
      <Estrellado />
      <Inicio />
      <ProyectosContainer />
      <SobreMi/>
      <Certificados/>
      <Form/>
    </main>
  );
};

export default Templete;
