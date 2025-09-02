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

  const imgClonKuma = [
    "/img/CLON-KUMA/1.jpeg",
    "/img/CLON-KUMA/2.jpeg",
    "/img/CLON-KUMA/3.jpeg",
    "/img/CLON-KUMA/4.jpeg",
    "/img/CLON-KUMA/5.jpeg",
    "/img/CLON-KUMA/6.jpeg",
    "/img/CLON-KUMA/7.jpeg",
    "/img/CLON-KUMA/8.jpeg",
  ];

  return (
    <section className="section-proyectos" id="proyectos">
      <h2>MIS PROYECTOS</h2>
      <div className="grid-proyectos">
        <Proyecto
          titulo="PODA-WEB"
          img={imgPoda}
          descripcion={[
            "PODA-WEB es un sistema web creado con el stack MERN. Fue desarrollado con la intención de digitalizar el trámite de poda particular de la Municipalidad de Santa Rosa.",
            "Se utilizan tecnologías como MERN, JWT, Mongoose, Multer, Nodemailer, Node-Cron, pg, entre otras.",
            "En la aplicación se definen cuatro roles de usuario: user, espacios-verdes, ide y admin. El usuario (user) carga las solicitudes, espacios-verdes las gestiona, ide tiene acceso a estos datos y admin administra los usuarios y los demás módulos de la app.",
            "Actualmente no se está utilizando.",
          ]}
          logos={["react", "node", "express", "mongodb", "tailwind"]}
          githubUrl="https://github.com/AnibalPaini/PODA-WEB-public"
          urlProduccion="https://espaciosverdesdigital.santarosa.gob.ar/"
        />
        <Proyecto
          titulo="CanchasYa"
          img={imgCanchasYa}
          descripcion={[
            "CanchasYa surge como un proyecto personal con el objetivo de resolver una problemática común en los complejos deportivos: la falta de un sistema automatizado para la reserva de turnos.",
            "La plataforma permite que los complejos deportivos se adhieran al sistema, donde podrán registrar sus canchas, definir sus administradores y gestionar sus turnos. A su vez, los usuarios podrán visualizar todos los complejos registrados, consultar la disponibilidad de canchas, y reservar turnos de manera sencilla.",
            "El sistema también incluye una funcionalidad de pagos: los clientes pueden abonar la totalidad del turno o dejar una seña, completando el pago restante en el establecimiento, según las políticas de cada complejo.",
            "CanchasYa busca digitalizar y simplificar la gestión de reservas deportivas, generando beneficios tanto para los administradores como para los clientes.",
            "Este proyecto se encuentra actualmente en desarrollo. El repositorio es privado.",
          ]}
          logos={["react", "node", "express", "mongodb", "tailwind"]}
        />
        <Proyecto
          titulo="Ping Status"
          img={imgClonKuma}
          descripcion={[
            "Monitor de Dispositivos",
            "Este proyecto es una aplicación full stack desarrollada con React, Node.js, Tailwind CSS, MongoDB y Socket.IO. Funciona como un sistema de monitoreo en tiempo real de dispositivos, inspirado en Uptime Kuma.",
            "El sistema permite agregar dispositivos para ser monitoreados mediante pings periódicos, utilizando la librería ping de Node.js. El backend evalúa el estado de cada dispositivo (activo o inactivo) y, mediante Socket.IO, emite eventos que son escuchados por el frontend para reflejar los cambios en tiempo real sin necesidad de recargar la página.",
            "Además, la interfaz está diseñada con Tailwind CSS, asegurando una experiencia visual moderna, responsiva y clara para el usuario.",
            "El host Render no permite el uso de Ping, por lo que se verá incompleto en la página de producción. Tardará en cargar debido al host Render.",
            "Podrá iniciar con usuario: admin y clave: 123",
          ]}
          logos={[
            "react",
            "node",
            "express",
            "mongodb",
            "tailwind",
            "socketio",
          ]}
          githubUrl="https://github.com/AnibalPaini/Ping-Status"
          urlProduccion="https://pingstatus.netlify.app/"
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
