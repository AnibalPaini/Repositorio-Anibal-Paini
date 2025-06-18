import React from "react";
import Proyecto from "../Proyecto/Proyecto";

const ProyectosContainer = () => {
  const imgPoda = [
    "/img/PODA-WEB/1.jpeg",
    "/img/PODA-WEB/2.jpeg",
    "/img/PODA-WEB/3.jpeg",
    "/img/PODA-WEB/4.jpeg",
    "/img/PODA-WEB/5.png",
    "/img/PODA-WEB/6.png",
    "/img/PODA-WEB/7.png",
    "/img/PODA-WEB/8.jpeg",
    "/img/PODA-WEB/9.jpeg",
    "/img/PODA-WEB/10.png",
  ];

  const imgCanchasYa = [
    "/img/CanchasYa/image2.png",
    "/img/CanchasYa/image3.png",
    "/img/CanchasYa/image4.png",
    "/img/CanchasYa/image5.png",
    "/img/CanchasYa/image6.png",
    "/img/CanchasYa/image7.png",
    "/img/CanchasYa/image8.png",
    "/img/CanchasYa/image9.png",
    "/img/CanchasYa/image10.png",
    "/img/CanchasYa/image.png",
    "/img/CanchasYa/image1.png",
  ];

  return (
    <section className="section-proyectos" id="proyectos">
      <h2>MIS PROYECTOS</h2>
      <div className="grid-proyectos">
        <Proyecto
          titulo="PODA-WEB"
          img={imgPoda}
          descripcion="PODA-WEB es un sistema web creado con el stack MERN. Fue desarrollado con la intención de digitalizar el trámite de poda particular de la Municipalidad de Santa Rosa, donde actualmente trabajo.
Se utilizan tecnologías como MERN, JWT, Mongoose, Multer, Nodemailer, Node-Cron, pg, entre otras.

En la aplicación se definen cuatro roles de usuario: user, espacios-verdes, ide y admin. El usuario (user) carga las solicitudes, espacios-verdes las gestiona, ide tiene acceso a estos datos y admin administra los usuarios y los demás módulos de la app."
          logos={["react", "node", "express", "mongodb", "tailwind"]}
          githubUrl="https://github.com/AnibalPaini/PODA-WEB-public"
          urlProduccion="https://espaciosverdesdigital.santarosa.gob.ar/"
        />
        <Proyecto
          titulo="CanchasYa"
          img={imgCanchasYa}
          descripcion="CanchasYa surge como un proyecto personal con el fin de terminar con la problemática que sufren la gran mayoría de complejos deportivos: la falta de un sistema automatizado para la reserva de turnos.
El sistema se basa en que los complejos deportivos se adhieran al sistema, en donde cada complejo definirá sus usuarios administradores y podrán registrar sus canchas y turnos. Mediante el sistema los clientes podrán visualizar todos los complejos, las canchas de cada complejo, seleccionar la cancha y tomar un turno que esté disponible, además se podrá pagar la totalidad del turno o una seña y deberá pagarse el total una vez en el establecimiento o según las condiciones del complejo.
Así CanchasYa busca digitalizar y simplificar la gestión de reservas deportivas, beneficiando tanto a administradores de complejos y a sus clientes.
Proyecto actualmente en desarrollo, el repositorio es privado.
"
          logos={["react", "node", "express", "mongodb", "tailwind"]}
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
          logos={["react", "bootstrap"]}
        />
      </div>
    </section>
  );
};

export default ProyectosContainer;
