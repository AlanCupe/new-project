import React from "react";
import "./MyNavbar.css";
import CartWidget from "../CartWidget/CartWidget";

const MyNavbar = () => {
  return (
    <header>
     <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="container-img"><img src="./img/newProjectLogo.webp"/></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
            <div className="container-img"><img src="./img/newProjectLogo.webp"/></div>
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                Inicio
              </li>
              <li className="nav-item">
                Categorias
              </li>
              <li className="nav-item">
                Nosotros
              </li>
              <li className="nav-item">
                Contacto
              </li>

          
            </ul>
            <CartWidget/>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn border border-light text-light btn-nav" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default MyNavbar;
