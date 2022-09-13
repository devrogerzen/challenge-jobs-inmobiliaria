import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import swAlert from "sweetalert";
import LogoInmsa from "../images/logoinmsa.jpg";
import { useState } from "react";

export const InicioLogin = () => {
  const navigator = useNavigate();
  const [token, setToken] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regexEmail.test(email));
    if (email === "" || password === "") {
      swAlert("los campos no pueden estar vacios");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      swAlert("Debes escribir una dirección de correo valida");
      return;
    }

    if (email !== "challenge@inmsa.com" || password !== "123456") {
      swAlert("creadenciales invalidas");
      return;
    }

    token && navigator("/listado");
  };

  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <NavLink className="linksclass" to="/contacto">
        Contacto
      </NavLink>
      <img src={LogoInmsa} className="App-logo" alt="logo" />
      <h4 className="logintitulo">Login</h4>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          placeholder="Escribe Email"
          className="inputclass"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Escribe Contraseña"
          className="inputclass"
        />
        <br />
        <button className="btnlogin" type="submit" onClick={() => setToken(true)}>
          Ingresar
        </button>
      </form>
    </motion.div>
  );
};
