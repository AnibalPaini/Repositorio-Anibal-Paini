import React, { useState } from "react";
import { Link } from "react-router-dom";

const Proyecto = ({
  titulo,
  img,
  logos = [],
  githubUrl,
  descripcion,
  urlProduccion,
}) => {
  const listLogos = {
    react: "devicon-react-original-wordmark colored",
    node: "devicon-nodejs-plain-wordmark colored",
    js: "devicon-javascript-plain colored",
    html: "devicon-html5-plain colored",
    mongodb: "devicon-mongodb-plain-wordmark colored",
    express: "devicon-express-original",
    css: "devicon-css3-plain colored",
    bootstrap: "devicon-bootstrap-plain colored",
    tailwind: "devicon-tailwindcss-original colored",
    jwt: "",
    github: "devicon-github-original-wordmark",
    socketio:"devicon-socketio-original socketio-icon"
  };

  return (
    <div className="proyecto">
      <p>{titulo}</p>
      <Link
        state={{ titulo, img, logos, githubUrl, descripcion, urlProduccion }}
        to={"/proyecto-detail"}
      >
        <div className="imagen-proyecto">
          <img src={img[0]} alt={titulo} />
        </div>
      </Link>
      <div className="logos">
        {logos.map((logoKey) => {
          const className = listLogos[logoKey];
          return className ? <i key={logoKey} className={className} title={logoKey}></i> : null;
        })}
      </div>
    </div>
  );
};

export default Proyecto;
