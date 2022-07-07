import React from "react";
import { app } from "./fb";
import NavbarProject from "./components/Navbar";
import Cards from "./components/Cards";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="container-project">
        <NavbarProject />
        <h1>Bienvenido, sesión iniciada.</h1>
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
        <Cards />
    </div>
  );
};

export default Home;