import React from "react";

const SobreMi = () => {
  return (
    <section className="section-sobreMi">
      <div className="grid-sobreMi">
        <div className="sobreMi-texto">
          <h2>SOBRE MÍ</h2>
          <p>
            Soy Aníbal Paini, tengo 23 años y soy desarrollador full stack MERN.
            Actualmente curso el 3° año de la Tecnicatura en Desarrollo de
            Software. Me apasiona la tecnología y el aprendizaje constante.
          </p>
          <p>
            He trabajado en proyectos personales y colaborativos utilizando
            tecnologías como React, Node.js, Express y MongoDB. También tengo
            experiencia en soporte técnico e infraestructura de redes,
            desempeñándome en el área informática del municipio de Santa Rosa.
          </p>
          <p>
            Me especializo en el desarrollo web con el stack MERN, y manejo
            herramientas como Git, Docker y metodologías ágiles. Mi objetivo es
            seguir creciendo profesionalmente y participar en proyectos
            innovadores que generen un impacto positivo.
          </p>
          <p>
            En mi tiempo libre disfruto de jugar videojuegos, practicar deportes
            y mantenerme al tanto de las últimas tendencias tecnológicas.
          </p>
        </div>
        <div className="sobreMi-tecnologias">
          <h2>TECNOLOGÍAS</h2>
          <div className="iconos-tecnologias">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
            <i className="devicon-nodejs-plain-wordmark colored"></i>
            <i className="devicon-express-original colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-bootstrap-plain colored"></i>
            <i className="devicon-tailwindcss-original colored"></i>
            <i className="devicon-github-original-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
