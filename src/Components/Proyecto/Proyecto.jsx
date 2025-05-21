import React from "react";

const Proyecto = ({ titulo, img, logos = [], githubUrl }) => {
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
  };
  return (
    <div className="proyecto">
      <p>{titulo}</p>
      <div className="imagen-proyecto">
        <img src={img} alt="Proyecto Poda Web" />
        <div className="overlay">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={listLogos.github}></i>
          </a>
        </div>
      </div>
      <div className="logos">
        {logos.map((logoKey) => {
          const className = listLogos[logoKey];
          return className ? <i key={logoKey} className={className}></i> : null;
        })}
      </div>
    </div>
  );
};

export default Proyecto;
