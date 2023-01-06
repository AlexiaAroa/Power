import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from 'reactstrap';

const NavBar = () => {

    return (
        <>
            <Navbar>
                <Nav className="me-auto">
                    <NavItem>
                        <NavLink href="/components/">Página Principal</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            Vestidos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Pantalones</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/components/">Remeras</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            Calzado
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Zapatillas</DropdownItem>
                            <DropdownItem>Botas</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>Texto</NavbarText>
            </Navbar>
        </>
    )
}

export default NavBar