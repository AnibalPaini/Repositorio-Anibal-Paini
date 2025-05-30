import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [alertaEnvio, setAlertaEnvio] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const enviarForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs
        .sendForm(
          "service_wpjdxzv",
          "template_08u32so",
          e.target,
          "TURLnASp2I5RUiv6w"
        )
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            customClass: {
              popup: "mi-popup",
            },
          });
          setFormData({
            nombre: "",
            apellido: "",
            email: "",
            mensaje: "",
            time: Date.now(),
          });
          setLoading(false);
        });
    } catch (error) {
      console.error("Error al enviar:", error);
      setLoading(false);
      alert("Hubo un error al enviar el mensaje");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-form">
      <div className="conteiner-form">
        <h2>CONTÁCTAME</h2>
        <form action="" className="form" onSubmit={enviarForm}>
          <input
            className="inputNombre"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />

          <input
            className="inputApellido"
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />

          <input
            className="inputEmail"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="textArea"
            name="mensaje"
            placeholder="Mensaje..."
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>

          <button className="buttonForm" type="submit">
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
