import React, { Fragment } from "react";
import { app } from "./fb";
import NavbarProject from "./components/Navbar";
import Cards from "./components/Cards";

const Home = () => {
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <Fragment>
      <NavbarProject />
      <div className="container-project">
          <h1 className="title-project">Bienvenido A TU CASA!</h1>
          <Cards />
      </div>
    </Fragment>
  );
};

export default Home;