import React, { useRef } from "react";
import { motion } from "framer-motion"
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import { NavLink, useNavigate } from "react-router-dom";

export const ContactUs = () => {

  const navigate = useNavigate()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jpat2jl",
        "template_tsrzecv",
        form.current,
        "F4qdV9AuCwVIQHSza"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal(
            "Recibido " +
              usuarioform.name +
              " Gracias por tu mensaje te respondere a " +
              usuarioform.email + " en la brevedad posible"
          );

          navigate("/")
        },
        (error) => {
          console.log(error.text);
        }
      );

    let usuarioform = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      message: e.target.message.value,
    };

    console.log(usuarioform);
  };

  return (
    <div className="contact-container">
    
    <motion.form className="container-form" ref={form} onSubmit={sendEmail}
    initial={{ opacity: 0 }}
    animate={{opacity: 1}}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
    >
      <NavLink className="linksclass" to="/" >Ir Atras</NavLink>
      <br />
      <input
        className="form-input"
        type="text"
        name="user_name"
        placeholder="Nombre"
      />

      <input
        className="form-input"
        type="email"
        name="user_email"
        placeholder="Email"
      />

      <textarea
        className="form-textarea"
        name="message"
        placeholder="Dejame un mensaje aquí"
      />
      <input className="form-botton-send" type="submit" value="Enviar" />
    </motion.form>
    </div>
  );
};