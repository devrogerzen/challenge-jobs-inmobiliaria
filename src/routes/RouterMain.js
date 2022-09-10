import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { InicioLogin } from "../components/InicioLogin";
import { Listado } from "../components/Listado";
import { ContactUs } from "../components/ContactUs";

export const RouterMain = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InicioLogin />} />
        <Route path="/listado" element={<Listado />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};