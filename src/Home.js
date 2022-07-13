import React, { Fragment } from "react";
import NavbarProject from "./components/Navbar";
import Cards from "./components/Cards";

const Home = () => {
  return (
    <Fragment>
      <NavbarProject />
      <div className="container-project">
          <h1 className="title-project">Te damos la bienvenida!</h1>
          <Cards />
      </div>
    </Fragment>
  );
};

export default Home;