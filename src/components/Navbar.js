import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'

const NavbarProject = () => {
  return (
    <div>
        <Navbar
            color="light"
            expand="md"
            light
        >
            <NavbarBrand href="/">
                A tu casa
            </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck(){}} />
                    <Collapse navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                                <UncontrolledDropdown
                                    inNavbar
                                    nav
                                >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>
                            Simple Text
                        </NavbarText>
                    </Collapse>
            </Navbar>
    </div>
  )
}

export default NavbarProject