import React from "react";

const Form = () => {
  return (
    <section className="section-form">
      <div className="conteiner-form">
        <h2>Si estas interesado contáctame!</h2>
        <form action="" className="form">
          <div>
            <input
              className="inputNombre"
              type="text"
              placeholder="Nombre"
            />
          </div>
          <div>
            <input
              className="inputApellido"
              type="text"
              placeholder="Apellido"
            />
          </div>
          <div>
            <input className="inputEmail" type="email" placeholder="Email" />
          </div>
          <div>
            <textarea className="textArea" name="" id=""></textarea>
          </div>
          <button className="buttonForm" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
