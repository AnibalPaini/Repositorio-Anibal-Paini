import React from "react";

const SobreMi = () => {
  return (
    <section className="section-sobreMi">
      <div className="grid-sobreMi">
        <div className="sobreMi-texto">
          <h2>SOBRE MÍ</h2>
          <p>
            Soy Aníbal Paini, tengo 23 años, argentino y soy desarrollador full stack MERN.
            Actualmente curso el 3° año de la Tecnicatura en Desarrollo de
            Software.
          </p>
          <p>
            He trabajado en proyectos personales y colaborativos utilizando
            tecnologías como React, Node.js, Express y MongoDB. También tengo
            experiencia en soporte técnico e infraestructura de redes, 
            desempeñándome en el área informática del municipio de Santa Rosa.
          </p>
          <p>
            Mi objetivo es
            seguir creciendo profesionalmente y participar en proyectos
            innovadores que generen un impacto positivo.
          </p>
        </div>
        <div className="sobreMi-tecnologias">
          <h2>TECNOLOGÍAS</h2>
          <div className="iconos-tecnologias">
            <i className="devicon-html5-plain colored" title="HTML"></i>
            <i className="devicon-css3-plain colored" title="CSS"></i>
            <i className="devicon-javascript-plain colored " title="JavaScript"></i>
            <i className="devicon-nodejs-plain-wordmark colored" title="NodeJS"></i>
            <i className="devicon-express-original colored" title="Express"></i>
            <i className="devicon-mongodb-plain-wordmark colored" title="MongoDB"></i>
            <i className="devicon-bootstrap-plain colored" title="Bootstrap"></i>
            <i className="devicon-tailwindcss-original colored" title="Tailwindcss"></i>
            <i class="devicon-github-original" title="GitHub"></i>
            <i class="devicon-git-plain colored" title="Git"></i>
            <i className="devicon-socketio-original socketio-icon" title="Socket.io"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
