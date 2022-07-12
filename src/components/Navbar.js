import React from 'react'
import { app } from "../fb";
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'


const cerrarSesion = () => {
  app.auth().signOut();
};

const NavbarProject = () => {
  return (
    <div className='navbar-project'>
        <Navbar
            color="warning"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                <img src='/img/IMG-20220710-WA0012.jpg' className='image-nav-project' />
            </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                <Collapse navbar>
                    <button onClick={cerrarSesion} className='btn-nav-project'>Cerrar Sesión</button>
                </Collapse>
            </Navbar>
    </div>
  )
}

export default NavbarProject