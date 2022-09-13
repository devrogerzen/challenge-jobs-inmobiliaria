import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { app } from "../database/FirebaseConexion";

export const Listado = () => {
  const [info, setInfo] = useState([]);

  const obtenerInfo = async () => {
    const docusList = await app.firestore().collection("archivos").get();
    setInfo(docusList.docs.map((doc) => doc.data()));
  };
  useEffect(() => {
    !info.length && obtenerInfo();
  }, [info]);

  return (
    <motion.div
      className="divclass"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <NavLink className="linksclass" to="/contacto">
        Contacto
      </NavLink>
      <div className="cardcontainer">
        {info.map((doc, idx) => {
          return (
            <div key={idx} className="cardclass">
              <img className="imgclass" src={doc.url} alt="imagenes casa" />
              <h5 className="tituloclass">{doc.nombre}</h5>
              <Link
                className="btnclassdetalle"
                to="/descripcion"
                state={{ data: doc }}
              >
                Ver detalles
              </Link>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
