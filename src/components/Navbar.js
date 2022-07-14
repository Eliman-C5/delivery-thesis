import React from 'react'
import { app } from "../fb";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'


const cerrarSesion = () => {
  app.auth().signOut();
};

const NavbarProject = ({setShow, show}) => {
  return (
    <div className='navbar-project'>
        <Navbar
            color="warning"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                <h1 className='title-nav-project'>A TU CASA</h1>
            </NavbarBrand>
                <button onClick={cerrarSesion} className='btn-nav-project'>Cerrar Sesión</button>
          </Navbar>
          <div className='quienes-somos'>
            <p onClick={() => setShow(false)} className='quienes-p'>
            Home
            </p>
            <p onClick={() => setShow(true)} className='quienes-p'>
            ¿Quienes somos?
            </p>
          </div>
    </div>
  )
}

export default NavbarProject