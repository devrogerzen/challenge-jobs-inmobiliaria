import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Descripcion = () => {
  const { state } = useLocation() || {};
  const { data } = state || {};
  console.log(data);

  return (
    <div className="descripclass">
      <div className="descripelementos">
      <NavLink className="linksclass" to="/listado">
        Ir Atras
      </NavLink>
        <img className="descripimagen" src={data.url} alt="imagenes casa " />
        <h2>Descripcion: {data.nombre}</h2>
        <h2>Precio: {data.precio}$</h2>
      </div>
    </div>
  );
};
