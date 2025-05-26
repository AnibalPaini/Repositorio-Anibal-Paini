import React from "react";
import Proyecto from "../Proyecto/Proyecto";

const ProyectosContainer = () => {
  return (
    <section className="section-proyectos">
      <h2>MIS PROYECTOS</h2>
      <div className="grid-proyectos">
        <Proyecto
          titulo="PODA-WEB"
          img="/img/PODA-WEB-IMG.png"
          logos={["react", "node", "express", "mongodb", "tailwind"]}
          githubUrl="https://github.com/AnibalPaini/PODA-WEB-public"
        />
        <Proyecto
          titulo="Ecommerce"
          img="/img/coder-back-2.png"
          logos={["react", "node", "express", "mongodb", "bootstrap"]}
        />
        <Proyecto
          titulo="Materos"
          img="/img/materos-coder.png"
          logos={["html", "css", "js", "bootstrap"]}
        />
        <Proyecto
          titulo="Camisetas MD"
          img="/img/coder-react.png"
          logos={["react", "node", "express", "mongodb", "bootstrap"]}
        />
        <Proyecto
          titulo="BlogDeCafe"
          img="/img/blog-cafe.png"
          logos={["html", "css"]}
        />
        <Proyecto
          titulo="CanchasYa (des.)"
          img="/img/blog-cafe.png"
          logos={["react", "node", "express", "mongodb", "tailwind"]}
        />
      </div>
    </section>
  );
};

export default ProyectosContainer;
