import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav  nav nav-pills mb-3">            
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>Home</NavLink>
            </li>            
            <li className="nav-item">
              <NavLink
                to="/FullStackDevelopment"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>FullStackDevelopment</NavLink>
            </li>
            <li className="nav-item"><NavLink
              to="/CyberSecurity"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>CyberSecurity</NavLink></li>
            <li className="nav-item">
              <NavLink
                to="/DataScience"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}> DataScience</NavLink>
            </li>

            <li className="nav-item"><NavLink
              to="/UIUX"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""}>   UIUX</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;