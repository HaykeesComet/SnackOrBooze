import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

/**
 * NavBar Component
 * Displays the navigation bar with links to different routes.
 */

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Home
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/snacks" className="nav-link">Snacks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/drinks" className="nav-link">Drinks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/add-item" className="nav-link">Add Item</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
