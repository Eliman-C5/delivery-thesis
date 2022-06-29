import React from "react";
import { app } from "./fb";
import NavbarProject from "./components/Navbar";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div>
        <NavbarProject />
        <h1>Bienvenido, sesión iniciada.</h1>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
    </div>
  );
};

export default Home;