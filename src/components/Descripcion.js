import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Descripcion = () => {
  const { state } = useLocation() || {};
  const { data } = state || {};
  console.log(data);

  return (
    <motion.div
      className="descripclass"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="descripelementos">
        <NavLink className="linksclass" to="/listado">
          Ir Atras
        </NavLink>
        <img className="descripimagen" src={data.url} alt="imagenes casa " />
        <h2>Descripcion: {data.nombre}</h2>
        <h2>Precio: {data.precio}$</h2>
      </div>
    </motion.div>
  );
};
