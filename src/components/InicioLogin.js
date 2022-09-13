import { NavLink, useNavigate } from "react-router-dom";
import swAlert from "sweetalert";
import LogoInmsa from "../images/logoinmsa.jpg"

export const InicioLogin = () => {
  const navigator = useNavigate();

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

    navigator("/listado");
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="linksclass" to="/contacto">
          Contacto
        </NavLink>
        <h3>Logueate para Visualizar Viviendas</h3>
        <img src={LogoInmsa} className="App-logo" alt="logo" />

        <form onSubmit={submitHandler}>
          <input type="email" name="email" placeholder="Escribe Email" />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Escribe Contraseña"
          />
          <br />
          <button type="submit">Ingresar</button>
        </form>
      </header>
    </div>
  );
};
