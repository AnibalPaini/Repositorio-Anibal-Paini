import React from "react";
import { Routes, Route } from "react-router-dom";
import Templete from "../Templete/Templete";
import ProyectoDetail from "../ProyectoDetail/ProyectoDetail";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Templete />} />
      <Route path="/proyecto-detail" element={<ProyectoDetail />} />
    </Routes>
  );
};

export default Rutas;
