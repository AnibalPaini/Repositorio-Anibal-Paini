import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProyectoDetail = () => {
  const location = useLocation();
  const { titulo, img, logos, githubUrl, descripcion, urlProduccion } =
    location.state || {};
  const navigate = useNavigate();

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

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === img.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? img.length - 1 : prev - 1));
  };

  const handleVolver = () => {
    navigate("/");
    setTimeout(() => {
      const seccion = document.getElementById("proyectos");
      if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (!location.state) {
    return <Navigate to="/" />;
  }

  return (
    <main className="main-proyecto-detail">
      <section className="section-proyecto-detail">
        <div className="proyecto-detail-container">
          <div>
            <p
              className="flecha-volver"
              onClick={handleVolver}
            >
              ←
            </p>
          </div>
          <h1>{titulo}</h1>

          <div className="carousel">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {img.map((src, index) => (
                <div className="carousel-item" key={index}>
                  <img src={src} alt={`${titulo} ${index + 1}`} />
                </div>
              ))}
            </div>

            <button className="carousel-button prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-button next" onClick={nextSlide}>
              ›
            </button>

            <div className="carousel-indicators">
              {img.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="proyecto-detail-logos">
            {logos?.map((logoKey) => {
              const className = listLogos[logoKey];
              return className ? (
                <i key={logoKey} className={className}></i>
              ) : null;
            })}
          </div>

          <p className="proyecto-detail-desc">{descripcion}</p>

          <div className="botones-link">
            {githubUrl && (
              <a
                className="proyecto-detail-git"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <i class="devicon-github-original"></i>
              </a>
            )}

            {urlProduccion && (
              <a
                className="proyecto-detail-link"
                href={urlProduccion}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver proyecto
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProyectoDetail;
