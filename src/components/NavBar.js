import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


export default function NavBar(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark>
        <span class="navbar-toggler-icon mr-5" onClick={toggleNavbar}>
          <i class="fas fa-bars"></i>
        </span>
        <NavbarBrand href="/" className="mr-auto logo">
          TailoredToMe
        </NavbarBrand>

        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/question1">A Question</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
       
      </Navbar>
    </div>
  );
};