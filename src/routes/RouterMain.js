import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioLogin } from "../components/InicioLogin";
import { Listado } from "../components/Listado";
import { ContactUs } from "../components/ContactUs";
import { Descripcion } from "../components/Descripcion";

export const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioLogin />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/descripcion" element={<Descripcion />} />
      </Routes>
    </Router>
  );
};
