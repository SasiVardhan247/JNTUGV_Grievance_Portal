import React from "react";
import Logo from "./Logo";
const Header = () => {
  return (
    <div>
      <header id="header">
        <Logo />
        <div className="container d-flex align-items-center justify-content-center">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 gap-5">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">About</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Login
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/login">Registrar</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/grievanceForm">Apply for Grievance</a></li>
                      <li><a className="dropdown-item" href="/checkstatus">Check status</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
