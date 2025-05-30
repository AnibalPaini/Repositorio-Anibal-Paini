// StarryBackground.jsx
import React, { useEffect, useRef } from "react";
import "./estrellado.css";

const Estrellado = ({ starCount = 300 }) => {
  const skyRef = useRef(null);

  useEffect(() => {
    const sky = skyRef.current;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 2 + 1}px`;
      star.style.height = star.style.width;

      // Animación con duración y delay aleatorio
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;

      sky.appendChild(star);
    }

    // Cleanup en caso de desmontar
    return () => {
      sky.innerHTML = "";
    };
  }, [starCount]);

  return <div className="sky" ref={skyRef}></div>;
};

export default Estrellado;
