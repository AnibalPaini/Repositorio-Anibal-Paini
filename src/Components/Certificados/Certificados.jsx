import React from "react";
import Certificado from "../Certificado/Certificado.jsx";

const Certificados = () => {
  return (
    <section className="section-certificados">
      <div className="conteiner-certificados">
        <h2>CERTIFICADOS</h2>
        <div className="grid-certificados">
          <Certificado img="/img/DesarrolloWeb.png" title="Desarrollo Web" />
          <Certificado img="/img/JS.png" title="JavaScript" />
          <Certificado img="/img/React.png" title="ReactJS" />
          <Certificado img="/img/BackEnd.png" title="BackEnd" />
          <Certificado img="/img/BackEnd2.png" title="BackEnd" />
        </div>
      </div>
    </section>
  );
};

export default Certificados;
