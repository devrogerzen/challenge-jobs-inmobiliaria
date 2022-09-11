import logo from "../logo.svg";
import { /* Navigate, */ NavLink, useNavigate } from 'react-router-dom';
import swAlert from "sweetalert";
/* import axios from "axios"; */
/* import { app } from "../database/FirebaseConexion"; */

export const InicioLogin = () => {


const navigator = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(regexEmail.test(email))
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

    navigator("/listado")
    
    
/*     function loginUser(email, password) {
      console.log('Loging user ' + email);
    
      app.firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (user) {
        console.log('Credenciales correctas, ¡bienvenido!');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    loginUser() */
    

    /*   axios.post("https://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        swAlert("Perfecto, ingresaste correctamente");
        console.log(res.data);
        const tokenRecibido = res.data.token;

        sessionStorage.setItem("token", tokenRecibido);
        navigator(<Navigate replace to="/listado" />);
      })
      .catch(error => {
        console.log(error.response)
      }) */

  };

  /*  let token = sessionStorage.getItem("token");  */

  return (
    <div className="App">
      {/* {token && <Navigate replace to="/listado" />} */} 

      <header className="App-header">
      <NavLink className="linksclass" to="/contacto" >Contacto</NavLink>
        <h3>Lista de Propiedades INMSA</h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Logueate para Visualizar Viviendas</p>

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
