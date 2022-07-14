import React, { Fragment, useState } from "react";
import NavbarProject from "./components/Navbar";
import Cards from "./components/Cards";
import Testimonial from "./components/Testimonial";

const Home = () => {

  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <NavbarProject show={show} setShow={setShow} />
      <div className="container-project">
          <h1 className="title-project">Te damos la bienvenida!</h1>
          {
            show?
            <Testimonial />:
            <Cards />
          }
      </div>
    </Fragment>
  );
};

export default Home;